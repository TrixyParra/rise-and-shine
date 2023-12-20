const hamburgerMenu = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('is-active')
    mobileMenu.classList.toggle('is-open')
});