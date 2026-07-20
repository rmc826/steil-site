'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Scroll-reveal: observes [data-reveal] elements and fades/rises them in once.
// Re-arms on every route change (client-side navigation mounts new elements).
// No-op when the user prefers reduced motion.
export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]:not(.revealed)');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('revealed'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    // safety net: anything still hidden after 1.5s reveals itself
    const failsafe = setTimeout(() => {
      document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add('revealed');
      });
    }, 1500);
    return () => { io.disconnect(); clearTimeout(failsafe); };
  }, [pathname]);
  return null;
}
