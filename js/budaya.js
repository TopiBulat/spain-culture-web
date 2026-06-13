const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {

    navMobile.classList.toggle('open');

    if(navMobile.classList.contains('open')){
        navToggle.innerHTML = '&times;';
    }else{
        navToggle.innerHTML = '☰';
    }

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