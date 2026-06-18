  window.addEventListener('scroll', function() {
            const header = document.getElementById('siteHeader');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

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

// Fungsi untuk menutup menu otomatis saat link diklik
function tutupMenu() {
    mobileNav.classList.remove("active");
    menuBtn.innerHTML = "&#9776;";
}