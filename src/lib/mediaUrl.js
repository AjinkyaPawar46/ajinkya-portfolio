// public/media/* is served relative to the Vite base path
// (base: '/ajinkya-portfolio/' in vite.config.js). A leading-slash path
// like '/media/hero/hero.mp4' 404s in both dev and preview because it
// skips the base prefix — route every media path in content.js through
// this helper instead of writing the path directly.
export const mediaUrl = (path) => import.meta.env.BASE_URL + path;
