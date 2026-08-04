import { initNavigation } from './modules/navigation.js';
import { initAnimations } from './modules/animations.js';
import { initSmoothScroll } from './modules/smoothScroll.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnimations();
  initSmoothScroll();
});