/* Navbar scroll */
const siteHeader = document.getElementById('siteHeader');

window.addEventListener('scroll', () => {
siteHeader.classList.toggle('on', window.scrollY > 60);
});

/* Mobile menu toggle */
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

menuBtn.addEventListener('click', () => {
mobileNav.classList.toggle('open');
menuBtn.innerHTML =
mobileNav.classList.contains('open')
? '✕'
: '☰';
});

function tutupMenu() {
mobileNav.classList.remove('open');
menuBtn.innerHTML = '☰';
}
