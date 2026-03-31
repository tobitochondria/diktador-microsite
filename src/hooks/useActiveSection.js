import { useState, useEffect, useRef } from 'react';

/**
 * Custom scroll-spy hook.
 * On every scroll frame, checks which section's top edge is closest to
 * (but not below) the viewport top + offset. This guarantees every section
 * — regardless of height — gets highlighted when scrolled into view.
 */
export default function useActiveSection(sectionIds, offset = 80) {
  const [activeId, setActiveId] = useState('');
  const rafRef = useRef(0);

  useEffect(() => {
    if (!sectionIds.length) return;

    const getActive = () => {
      const scrollY = window.scrollY + offset + 1;
      let current = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollY) {
          current = id;
        }
      }

      // If we're at the very bottom of the page, activate the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        const lastId = sectionIds[sectionIds.length - 1];
        const lastEl = document.getElementById(lastId);
        if (lastEl) current = lastId;
      }

      setActiveId(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(getActive);
    };

    // Initial check
    getActive();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
