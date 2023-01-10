const burger = document.querySelectorAll('.burger');
const menu = document.querySelector(".menu")
const nav = document.querySelector('.menu__nav');
const navItems = nav.querySelectorAll('a');
const body = document.body;

burger.forEach((event) => {
    event.addEventListener('click', () => {
        body.classList.toggle('stop-scroll');
        menu.classList.toggle('menu--visible')
      });
})

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    menu.classList.remove('menu--visible')
  });
});