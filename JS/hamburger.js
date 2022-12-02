const menuIcon = document.querySelector('.icon');
const navMenu = document.querySelector('.nav-menus');
const siteT = document.querySelector('.site');
const navBar = document.querySelector('.nav-main');

menuIcon.addEventListener('click', () => {
  siteT.classList.toggle('v-hidden');
  menuIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBar.classList.toggle('bg-nav');
});

document.querySelectorAll('.navigation-link').forEach((n) => n.addEventListener('click', () => {
  menuIcon.classList.remove('active');
  navMenu.classList.remove('active');
  navBar.classList.remove('bg-nav');
}));
