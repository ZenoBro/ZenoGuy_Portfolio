import LocomotiveScroll from 'locomotive-scroll';

let locomotiveScroll = null;

export const initLocomotiveScroll = () => {
  if (typeof window !== 'undefined') {
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      multiplier: 1,
      class: 'is-reveal',
      scrollbarClass: 'c-scrollbar',
      scrollingClass: 'has-scroll-scrolling',
      draggingClass: 'has-scroll-dragging',
      smoothClass: 'has-scroll-smooth',
      initClass: 'has-scroll-init',
    });

    // Update locomotive scroll on window resize
    window.addEventListener('resize', () => {
      if (locomotiveScroll) {
        locomotiveScroll.update();
      }
    });

    return locomotiveScroll;
  }
  return null;
};

export const destroyLocomotiveScroll = () => {
  if (locomotiveScroll) {
    locomotiveScroll.destroy();
    locomotiveScroll = null;
  }
};

export const updateLocomotiveScroll = () => {
  if (locomotiveScroll) {
    locomotiveScroll.update();
  }
};

export const getLocomotiveScroll = () => locomotiveScroll;