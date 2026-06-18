// Mengambil elemen tombol pemicu menu berdasarkan class menu-btn
const menuBtn = document.querySelector(".menu-btn");

// Mengambil elemen kontainer navigasi mobile berdasarkan class mobile-nav
const mobileNav = document.querySelector(".mobile-nav");

// Fungsi untuk membuka dan menutup menu navigasi pada layar mobile
menuBtn.addEventListener("click", function () {
    
    // Menambah atau menghapus class active pada navigasi mobile secara bergantian
    mobileNav.classList.toggle("active");

    // Memeriksa status menu untuk menentukan bentuk ikon tombol
    if (mobileNav.classList.contains("active")) {
        // Jika menu dalam keadaan terbuka, ikon diubah menjadi tanda silang
        menuBtn.innerHTML = "&#10006;";
    } else {
        // Jika menu dalam keadaan tertutup, ikon dikembalikan menjadi garis tiga
        menuBtn.innerHTML = "&#9776;";
    }
});

// Fungsi mandiri untuk menutup menu mobile secara otomatis saat tautan diklik
function tutupMenu() {
    // Menghapus class active untuk menyembunyikan kembali kotak navigasi
    mobileNav.classList.remove("active");
    // Mengembalikan visual tombol pemicu menjadi ikon garis tiga
    menuBtn.innerHTML = "&#9776;";
}

window.addEventListener("scroll", function() {
    
    // Mengambil elemen header untuk memanipulasi saat layar di scroll
    const header = document.querySelector("header");

    // Memeriksa apakah posisi guliran layar sudah melewati batas 50 piksel dari atas
    if (window.scrollY > 50) {
        // Jika lebih dari 50 piksel, class scrolled ditambahkan pada header
        header.classList.add("scrolled");
    } else {
        // Jika kembali ke posisi paling atas, class scrolled dihapus dari header
        header.classList.remove("scrolled");
    }
});