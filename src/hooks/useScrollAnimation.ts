import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all animation classes
    const animationClasses = ['.fade-in', '.slide-in-left', '.slide-in-right'];
    const animatedElements: Element[] = [];
    
    animationClasses.forEach(className => {
      const elements = document.querySelectorAll(className);
      elements.forEach(el => {
        animatedElements.push(el);
        observer.observe(el);
      });
    });

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};