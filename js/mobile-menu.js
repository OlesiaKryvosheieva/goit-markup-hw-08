(() => {
  const menuContainer = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    menuContainer.classList.toggle('is-open');
    document.body.classList.toggle("no-scroll");
  }

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  
  window
    .matchMedia('(min-width: 600px)')
    .addEventListener(
      'change',
      e => e.matches && menuContainer.classList.remove('is-open'),
    );
})();
