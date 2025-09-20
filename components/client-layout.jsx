"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/loading-screen';

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Check if we're in the browser and hydration is complete
    setIsHydrated(true);
    
    // Simulate loading time for animations and content
    const minLoadingTime = 2000; // Minimum 2 seconds
    const startTime = Date.now();
    
    const checkLoadingComplete = () => {
      const elapsedTime = Date.now() - startTime;
      
      // Ensure minimum loading time and that DOM is ready
      if (elapsedTime >= minLoadingTime && document.readyState === 'complete') {
        setIsLoading(false);
      } else {
        // Check again after a short delay
        setTimeout(checkLoadingComplete, 100);
      }
    };

    // Start checking when document is ready
    if (document.readyState === 'complete') {
      checkLoadingComplete();
    } else {
      window.addEventListener('load', checkLoadingComplete);
      return () => window.removeEventListener('load', checkLoadingComplete);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Don't render anything until hydrated to prevent hydration mismatch
  if (!isHydrated) {
    return null;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen 
            key="loading"
            onLoadingComplete={handleLoadingComplete} 
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        {!isLoading && (
          <div key="content">
            {children}
          </div>
        )}
      </AnimatePresence>
    </>
  );
}