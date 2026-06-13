/* NAVBAR SCROLL */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('solid', window.scrollY > 60);
});

/* MOBILE MENU */
const toggle = document.getElementById('navToggle');
const mobile = document.getElementById('navMobile');

toggle.addEventListener('click', () => {
  mobile.classList.toggle('open');
});

/* REVEAL */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
    }
  });
});

document.querySelectorAll('.reveal').forEach(el => {
  revealObs.observe(el);
});