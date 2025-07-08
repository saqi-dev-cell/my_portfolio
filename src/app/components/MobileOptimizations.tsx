"use client"

import { useEffect } from 'react';

export default function MobileOptimizations() {
  useEffect(() => {
    // Disable custom cursor on mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      document.body.classList.add('mobile-device');
      
      // Add touch-friendly classes
      const interactiveElements = document.querySelectorAll('button, a, [data-cursor="hover"]');
      interactiveElements.forEach(el => {
        el.classList.add('mobile-touch');
      });
    }

    // Optimize scroll performance on mobile
    const scrollElements = document.querySelectorAll('[data-scroll]');
    scrollElements.forEach(el => {
      el.classList.add('mobile-scroll');
    });

    // Add viewport height fix for mobile browsers
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
      const now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    }, false);

    // Enable smooth scrolling for all browsers
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  return null;
}
