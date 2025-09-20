"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageWrapper({ children, namespace = 'default' }) {
  const pathname = usePathname();

  useEffect(() => {
    // Update barba namespace based on current route
    const container = document.querySelector('[data-barba="container"]');
    if (container) {
      container.setAttribute('data-barba-namespace', namespace);
    }
  }, [pathname, namespace]);

  return (
    <div 
      data-barba="container" 
      data-barba-namespace={namespace}
      className="min-h-screen"
    >
      {children}
    </div>
  );
}