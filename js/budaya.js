// Mengambil elemen navigasi
const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");

// Fungsi buka/tutup saat tombol hamburger diklik
menuBtn.addEventListener("click", function () {
    mobileNav.classList.toggle("active");
    if (mobileNav.classList.contains("active")) {
        menuBtn.innerHTML = "&#10006;"; // Ikon silang
    } else {
        menuBtn.innerHTML = "&#9776;"; // Ikon hamburger
    }
});

// Fungsi untuk menutup menu otomatis saat link diklik (SOLUSI ERROR)
function tutupMenu() {
    mobileNav.classList.remove("active");
    menuBtn.innerHTML = "&#9776;";
}

window.addEventListener("scroll", function() {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
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
