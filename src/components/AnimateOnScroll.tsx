'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimateOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Select all elements with .animate-up
    const elements = document.querySelectorAll('.animate-up');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px 50px 0px' }
    );

    elements.forEach((el) => {
      // If already in view immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in-view');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
