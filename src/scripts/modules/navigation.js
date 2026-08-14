export function initNavigation() {
  const toggleBtn = document.querySelector('.js-menu-toggle');
  const navMenu = document.querySelector('.js-nav-menu');
  const navLinks = navMenu?.querySelectorAll('a');

  if (!toggleBtn || !navMenu) return;

  const toggleMenu = () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    const willOpen = !isExpanded;

    toggleBtn.setAttribute('aria-expanded', String(willOpen));
    toggleBtn.classList.toggle('is-active');
    navMenu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
    toggleBtn.textContent = willOpen ? 'Close' : 'Menu';
    toggleBtn.setAttribute('aria-label', willOpen ? 'Close menu' : 'Open menu');
  };

  toggleBtn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('is-open')) toggleMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) toggleMenu();
  });
}