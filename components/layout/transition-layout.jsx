"use client";

import { useEffect } from 'react';
import { initBarba, destroyBarba } from '@/lib/barba';
import { initLocomotiveScroll, destroyLocomotiveScroll } from '@/lib/locomotive';
import SmoothScrollWrapper from './smooth-scroll-wrapper';

export default function TransitionLayout({ children }) {
  useEffect(() => {
    // Initialize smooth scrolling and page transitions
    const initializeTransitions = () => {
      // Initialize locomotive scroll first
      initLocomotiveScroll();
      
      // Then initialize barba for page transitions
      setTimeout(() => {
        initBarba();
      }, 100);
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initializeTransitions, 500);

    return () => {
      clearTimeout(timer);
      destroyBarba();
      destroyLocomotiveScroll();
    };
  }, []);

  return (
    <SmoothScrollWrapper>
      <div data-barba="wrapper">
        {children}
      </div>
    </SmoothScrollWrapper>
  );
}