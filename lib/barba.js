import barba from 'barba.js';
import { gsap } from 'gsap';
import { initLocomotiveScroll, destroyLocomotiveScroll, updateLocomotiveScroll } from './locomotive';

let isTransitioning = false;

export const initBarba = () => {
  // Initialize Barba.js
  barba.init({
    transitions: [
      {
        name: 'slide-transition',
        leave(data) {
          return new Promise((resolve) => {
            isTransitioning = true;
            
            // Destroy locomotive scroll before transition
            destroyLocomotiveScroll();
            
            // Create overlay panel
            const overlay = document.createElement('div');
            overlay.className = 'page-transition-overlay';
            overlay.style.cssText = `
              position: fixed;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100vh;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              z-index: 9999;
              transform: translateX(-100%);
            `;
            document.body.appendChild(overlay);

            // Animate overlay sliding in from left
            gsap.to(overlay, {
              x: '100%',
              duration: 0.8,
              ease: 'power2.inOut',
              onComplete: () => {
                resolve();
              }
            });

            // Fade out current content
            gsap.to(data.current.container, {
              opacity: 0,
              duration: 0.4,
              ease: 'power2.out',
              delay: 0.2
            });
          });
        },

        enter(data) {
          return new Promise((resolve) => {
            // Set initial state for new content
            gsap.set(data.next.container, {
              opacity: 0
            });

            // Find the overlay
            const overlay = document.querySelector('.page-transition-overlay');
            
            // Animate overlay sliding out to right
            gsap.to(overlay, {
              x: '200%',
              duration: 0.8,
              ease: 'power2.inOut',
              delay: 0.2,
              onComplete: () => {
                // Remove overlay
                if (overlay && overlay.parentNode) {
                  overlay.parentNode.removeChild(overlay);
                }
                
                // Reinitialize locomotive scroll
                setTimeout(() => {
                  initLocomotiveScroll();
                  updateLocomotiveScroll();
                }, 100);
                
                isTransitioning = false;
                resolve();
              }
            });

            // Fade in new content
            gsap.to(data.next.container, {
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
              delay: 0.4
            });
          });
        }
      }
    ],

    views: [
      {
        namespace: 'home',
        afterEnter() {
          // Page-specific animations for home
          gsap.fromTo('.hero-title', 
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.2 }
          );
        }
      },
      {
        namespace: 'about',
        afterEnter() {
          // Page-specific animations for about
          gsap.fromTo('.about-content', 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 }
          );
        }
      },
      {
        namespace: 'contact',
        afterEnter() {
          // Page-specific animations for contact
          gsap.fromTo('.contact-form', 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 }
          );
        }
      }
    ]
  });

  // Handle link clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="/"]');
    if (link && !isTransitioning) {
      e.preventDefault();
      const href = link.getAttribute('href');
      barba.go(href);
    }
  });
};

export const destroyBarba = () => {
  if (barba) {
    barba.destroy();
  }
};