import { useEffect, useState } from 'react';

// Scroll-spy: returns the id of whichever tracked section is currently
// nearest the vertical center of the viewport.
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          // pick whichever tracked section has the most overlap with the
          // rootMargin-narrowed viewport band, i.e. nearest the center
          const nearest = visible.reduce((a, b) => (b.intersectionRatio > a.intersectionRatio ? b : a));
          setActiveId(nearest.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
