// Memasang pengawas aktivitas guliran layar pada jendela browser
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

        // =============================================================
        // CONDITIONAL FILTER CONTROLS
        // =============================================================
        const filterButtons = document.querySelectorAll('.filter-btn');

        filterButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');
                const cards = document.querySelectorAll('.fest-card');

                cards.forEach(card => {
                    const cardSeason = card.getAttribute('data-season');

                    if (filterValue === 'all' || cardSeason === filterValue) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });

        // HAMBURGER MENU CONTROL
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
