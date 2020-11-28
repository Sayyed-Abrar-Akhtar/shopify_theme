(() => {
  const searchIcon = document.querySelector('.search-icon');
  const search = document.querySelector('.row-bottom');
  const closeIcon = document.querySelector('.icon-close-outline');

  searchIcon.addEventListener('click', () => {
    search.classList.add('row-bottom-show');
  });
  closeIcon.addEventListener('click', () => {
    search.classList.remove('row-bottom-show');
  });
})();

(() => {
  const menu = document.querySelector('.menu__items');
  const submenu = document.querySelector('.sub-menu--kid');
  const outsideMenuNodes = document.querySelectorAll(' .header, .section-hero');
  const outsideMenus = Array.prototype.slice.call(outsideMenuNodes);

  console.log(outsideMenus);

  menu.addEventListener('mouseover', (event) => {
    const isClass = event.target.firstChild.parentNode.classList[0];
    console.log(isClass);
    if (isClass === 'menu__link') {
      submenu.classList.add('sub-menu--show');

      console.log(submenu.classList);
    } else {
      outsideMenus.map((outsideMenu) => {
        outsideMenu.addEventListener('mouseover', () => {
          console.log('hover outside of menu');
          submenu.classList.remove('sub-menu--show');
        });
      });
    }
  });
})();
