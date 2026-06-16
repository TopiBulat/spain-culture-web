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

        function tutupMenu() {
            mobileNav.classList.remove("active");
            menuBtn.innerHTML = "&#9776;";
        }

        window.addEventListener("scroll", function () {

            const header = document.querySelector("header");

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });