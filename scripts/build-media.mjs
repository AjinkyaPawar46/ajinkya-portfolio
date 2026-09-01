// Transcodes source media (paths in media.manifest.mjs, which live outside
// this repo) into web-ready assets under public/media/. NEVER wire this
// into `npm run build` — it depends on files that only exist on the
// author's machine, so any other clone or CI run would fail.
//
// Usage:
//   node scripts/build-media.mjs            # transcode everything (skips up-to-date outputs)
//   node scripts/build-media.mjs --force     # re-transcode everything
//   node scripts/build-media.mjs --only hero # transcode a single manifest id

import { existsSync, mkdirSync, statSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { gifs, videos, hero, images } from './media.manifest.mjs';

const root = resolve(import.meta.dirname, '..');
const args = process.argv.slice(2);
const force = args.includes('--force');
const onlyIdx = args.indexOf('--only');
const only = onlyIdx !== -1 ? args[onlyIdx + 1] : null;

function ffmpeg(argList) {
  const result = spawnSync('ffmpeg', argList, { stdio: ['ignore', 'ignore', 'pipe'] });
  if (result.status !== 0) {
    console.error(result.stderr?.toString() ?? '');
    throw new Error(`ffmpeg failed (exit ${result.status}): ${argList.join(' ')}`);
  }
}

function ensureDir(outPath) {
  const dir = dirname(resolve(root, outPath));
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function isUpToDate(src, out) {
  if (force) return false;
  const outAbs = resolve(root, out);
  if (!existsSync(outAbs)) return false;
  if (!existsSync(src)) {
    console.warn(`  ! source missing, skipping: ${src}`);
    return true; // don't fail the whole run for one missing source
  }
  return statSync(outAbs).mtimeMs >= statSync(src).mtimeMs;
}

function skip(id) {
  return only && only !== id;
}

// 'public/media/racing/mpc-sim.mp4' -> 'public/media/racing/mpc-sim-poster.jpg'
// The case-study video player uses preload="none" (don't fetch video bytes
// until the user clicks play), so every video needs a poster frame or it
// renders as a blank/black rectangle until then.
function posterFor(out) {
  return out.replace(/\.mp4$/, '-poster.jpg');
}

function makePoster(videoAbs, posterAbs, atSeconds = 1) {
  ffmpeg(['-y', '-ss', String(atSeconds), '-i', videoAbs, '-frames:v', '1', '-q:v', '4', posterAbs]);
}

function transcodeGif({ id, src, out }) {
  if (skip(id)) return;
  const poster = posterFor(out);
  if (isUpToDate(src, out) && isUpToDate(src, poster)) return console.log(`  = ${id} (up to date)`);
  if (!existsSync(src)) return console.warn(`  ! ${id}: source not found, skipping`);
  ensureDir(out);
  const outAbs = resolve(root, out);
  const posterAbs = resolve(root, poster);
  ffmpeg([
    '-y', '-i', src,
    '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2',
    '-c:v', 'libx264', '-crf', '28', '-preset', 'slow', '-profile:v', 'main',
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an',
    outAbs,
  ]);
  makePoster(outAbs, posterAbs, 0);
  console.log(`  + ${id} (+ poster)`);
}

function probeHeight(src) {
  // ffmpeg auto-rotates using the stream's displaymatrix/rotate side data
  // before -vf filters run, so a coded height alone is wrong for portrait
  // phone footage stored as rotated landscape bytes (seen on drone_flying.mp4:
  // coded 848x480, rotation=-90, so the frame the scale filter actually
  // receives is 480 wide x 848 tall). Swap dimensions when rotation is
  // +-90/+-270 so the "don't upscale" check compares against what ffmpeg
  // will really see.
  const dims = spawnSync('ffprobe', [
    '-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0',
    src,
  ]).stdout.toString().trim();
  const [width, height] = dims.split(',').map((n) => parseInt(n, 10));

  const rotation = spawnSync('ffprobe', [
    '-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream_side_data=rotation', '-of', 'csv=p=0',
    src,
  ]).stdout.toString().trim();
  const rot = Math.abs(parseInt(rotation, 10)) || 0;

  return rot === 90 || rot === 270 ? width : height;
}

function transcodeVideo({ id, src, out, height }) {
  if (skip(id)) return;
  const poster = posterFor(out);
  if (isUpToDate(src, out) && isUpToDate(src, poster)) return console.log(`  = ${id} (up to date)`);
  if (!existsSync(src)) return console.warn(`  ! ${id}: source not found, skipping`);
  ensureDir(out);
  const outAbs = resolve(root, out);
  const posterAbs = resolve(root, poster);
  // Never upscale a source that's already smaller than the target height —
  // upscaling only inflates file size with no quality gain. Resolved via
  // ffprobe rather than an in-filter min() expression: ffmpeg's scale
  // filter did not evaluate `ih` inside min()/if() as expected in testing
  // (silently fell back to the literal target), so a concrete precomputed
  // number is more reliable than a filtergraph expression here.
  const sourceHeight = probeHeight(src);
  const targetHeight = Math.min(sourceHeight, height);
  ffmpeg([
    '-y', '-i', src,
    '-vf', `scale=-2:${targetHeight}`,
    '-c:v', 'libx264', '-crf', '26', '-preset', 'slow', '-profile:v', 'main',
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an',
    outAbs,
  ]);
  makePoster(outAbs, posterAbs, 1);
  console.log(`  + ${id} (+ poster)`);
}

function transcodeHero(h) {
  if (skip(h.id)) return;
  const upToDate = isUpToDate(h.src, h.out) && isUpToDate(h.src, h.poster);
  if (upToDate) return console.log(`  = ${h.id} (up to date)`);
  if (!existsSync(h.src)) return console.warn(`  ! ${h.id}: source not found, skipping`);
  ensureDir(h.out);
  ensureDir(h.poster);
  const outAbs = resolve(root, h.out);
  const posterAbs = resolve(root, h.poster);

  // The crop is optional. A square or otherwise off-ratio source needs a
  // 16:9 band cut out of it before scaling; a source that's already 16:9
  // (most edited footage) must not be cropped at all, or it loses the top
  // and bottom of every frame.
  const filters = [];
  if (h.cropWidth && h.cropHeight) {
    filters.push(`crop=${h.cropWidth}:${h.cropHeight}:${h.cropX ?? 0}:${h.cropY ?? 0}`);
  }
  filters.push(`scale=${h.scale}`);

  // `trimStart` picks the window out of a longer film; without it the clip
  // starts at 0. Placed after -i so the seek is frame-accurate.
  const trim = [];
  if (h.trimStart) trim.push('-ss', String(h.trimStart));
  if (h.trimSeconds) trim.push('-t', String(h.trimSeconds));

  ffmpeg([
    '-y', '-i', h.src,
    ...trim,
    '-vf', filters.join(','),
    '-c:v', 'libx264', '-crf', '30', '-preset', 'slow', '-profile:v', 'main',
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an',
    outAbs,
  ]);
  ffmpeg(['-y', '-ss', String(h.posterAtSeconds), '-i', outAbs, '-frames:v', '1', '-q:v', '4', posterAbs]);
  console.log(`  + ${h.id} (+ poster)`);
}

const QUALITY = {
  photo: { maxWidth: 1920, quality: 82 },
  diagram: { maxWidth: 1600, quality: 90 },
};

function transcodeImage({ id, src, out, quality }) {
  if (skip(id)) return;
  if (isUpToDate(src, out)) return console.log(`  = ${id} (up to date)`);
  if (!existsSync(src)) return console.warn(`  ! ${id}: source not found, skipping`);
  ensureDir(out);
  const { maxWidth, quality: q } = QUALITY[quality];
  const outAbs = resolve(root, out);
  ffmpeg([
    '-y', '-i', src,
    '-vf', `scale='min(${maxWidth},iw)':-2`,
    '-c:v', 'libwebp', '-quality', String(q), '-compression_level', '6',
    outAbs,
  ]);
  console.log(`  + ${id}`);
}

console.log('GIFs -> MP4');
gifs.forEach(transcodeGif);
console.log('Videos -> 720p MP4');
videos.forEach(transcodeVideo);
console.log('Hero');
transcodeHero(hero);
console.log('Images -> WebP');
images.forEach(transcodeImage);

// --- size report ---
function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = resolve(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const mediaDir = resolve(root, 'public/media');
const files = walk(mediaDir).map((p) => ({ path: p, size: statSync(p).size }));
const total = files.reduce((sum, f) => sum + f.size, 0);
files.sort((a, b) => b.size - a.size);

console.log(`\n${files.length} files, ${(total / 1024 / 1024).toFixed(2)} MB total`);
console.log('Largest files:');
for (const f of files.slice(0, 10)) {
  console.log(`  ${(f.size / 1024).toFixed(0).padStart(7)} KB  ${f.path.replace(root + '\\', '').replace(root + '/', '')}`);
}
const big = files.filter((f) => f.size > 3 * 1024 * 1024);
if (big.length > 0) {
  console.warn(`\n! ${big.length} file(s) over 3 MB — consider tightening CRF/trim:`);
  for (const f of big) console.warn(`  ${f.path}`);
}
