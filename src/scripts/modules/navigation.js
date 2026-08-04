export function initNavigation() {
  const toggleBtn = document.querySelector('.js-menu-toggle');
  const navMenu = document.querySelector('.js-nav-menu');
  const navLinks = navMenu?.querySelectorAll('a');

  if (!toggleBtn || !navMenu) return;

  const toggleMenu = () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    toggleBtn.classList.toggle('is-active');
    navMenu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
    toggleBtn.textContent = isExpanded ? 'Menu' : 'Close';
  };

  toggleBtn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('is-open')) toggleMenu();
    });
  });
}