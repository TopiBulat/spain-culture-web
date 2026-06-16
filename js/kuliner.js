 // 1. DATA KULINER
        const dataKuliner = [
            {
                nama: "Tapas",
                kategori: "camilan",
                kategoriLabel: "Camilan",
                deskripsi: "Gigitan kecil penuh rasa — dari jamón ibérico hingga patatas bravas, tapas adalah jiwa kehidupan sosial Sevilla.",
                foto: "image/tapas.jpg"
            },
            {
                nama: "Gazpacho",
                kategori: "camilan",
                kategoriLabel: "Camilan",
                deskripsi: "Sup tomat dingin khas Andalusia. Diminum seperti jus, disajikan di cuaca panas yang menyengat kota Sevilla.",
                foto: "image/gazpacho.jpg"
            },
            {
                nama: "Salmorejo",
                kategori: "camilan",
                kategoriLabel: "Camilan",
                deskripsi: "Saudara kental gazpacho dari Córdoba. Krim tomat padat dengan telur rebus dan jamón cincang di atasnya.",
                foto: "image/salmorejo.jpg"
            },
            {
                nama: "Paella de Mariscos",
                kategori: "makanan-berat",
                kategoriLabel: "Makanan Berat",
                deskripsi: "Nasi kuning safron dengan udang, kerang, dan cumi — dimasak dalam wajan besi besar di bawah sinar matahari.",
                foto: "image/paella.jpg"
            },
            {
                nama: "Pescaito Frito",
                kategori: "makanan-berat",
                kategoriLabel: "Makanan Berat",
                deskripsi: "Ikan kecil segar dari Sungai Guadalquivir, digoreng garing dalam tepung ringan. Makanan rakyat paling ikonik.",
                foto: "image/pescaitofrito.jpg"
            },
            {
                nama: "Churros con Chocolate",
                kategori: "camilan",
                kategoriLabel: "Camilan",
                deskripsi: "Adonan goreng panjang renyah, dicelupkan ke cokelat panas kental. Sarapan sejati orang Sevilla di pagi hari.",
                foto: "image/churros.jpg"
            },
            {
                nama: "Rebujito",
                kategori: "minuman",
                kategoriLabel: "Minuman",
                deskripsi: "Anggur Manzanilla dicampur Seven-Up dengan es batu dan daun mint. Minuman wajib festival Feria de Abril.",
                foto: "image/rebujito.jpg"
            },
            {
                nama: "Sangria",
                kategori: "minuman",
                kategoriLabel: "Minuman",
                deskripsi: "Minuman punch klasik Spanyol berbasis anggur merah yang dicampur dengan potongan buah-buahan segar, jus, dan sedikit rempah.",
                foto: "image/sangria.jpg" 
            },
        ];

        let filterAktif = "semua";
        let sortAktif   = "default";

        // 3. FUNGSI UTAMA RENDER KARTU
        function renderKartu() {
            const grid  = document.getElementById("kulinerGrid");
            const count = document.getElementById("kulinerCount");

            let data = filterAktif === "semua"
                ? [...dataKuliner]
                : dataKuliner.filter(function(item) { return item.kategori === filterAktif; });

            if (sortAktif === "az") {
                data.sort(function(a, b) { return a.nama.localeCompare(b.nama); });
            } else if (sortAktif === "za") {
                data.sort(function(a, b) { return b.nama.localeCompare(a.nama); });
            }

            count.textContent = data.length + " hidangan ditemukan";
            grid.innerHTML = "";

            if (data.length === 0) {
                grid.innerHTML = '<p class="kosong-msg">Tidak ada hidangan dalam kategori ini.</p>';
                return;
            }

            data.forEach(function(item) {
                const kartu = document.createElement("div");
                kartu.className = "food-card";
                kartu.setAttribute("data-kategori", item.kategori);

                kartu.innerHTML =
                    '<img class="food-card-img" src="' + item.foto + '" alt="' + item.nama + '" onerror="this.style.background=\'#2a2018\';this.style.height=\'320px\'">' +
                    '<div class="food-card-overlay"></div>' +
                    '<div class="food-card-body">' +
                        '<span class="food-card-tag">' + item.kategoriLabel + '</span>' +
                        '<h3 class="food-card-name">' + item.nama + '</h3>' +
                        '<p class="food-card-desc">' + item.deskripsi + '</p>' +
                    '</div>';

                grid.appendChild(kartu);
            });
        }

        // 4. LOGIKA TOMBOL FILTER KATEGORI
        function filterKuliner(tombol) {
            const semuaTombol = document.querySelectorAll(".filter-list li button");
            semuaTombol.forEach(function(btn) { btn.classList.remove("aktif"); });

            tombol.classList.add("aktif");
            filterAktif = tombol.getAttribute("data-filter");
            renderKartu();
        }

        // 5. LOGIKA MENU DROPDOWN URUTKAN
        function toggleDropdown() {
            const trigger = document.getElementById("dropdownTrigger");
            const menu    = document.getElementById("dropdownMenu");
            trigger.classList.toggle("open");
            menu.classList.toggle("open");
        }

        // 6. LOGIKA PENGURUTAN DATA (SORTING)
        function sortKuliner(urutan, tombol) {
            const semuaOpsi = document.querySelectorAll(".dropdown-menu ul li button");
            semuaOpsi.forEach(function(btn) { btn.classList.remove("dipilih"); });

            tombol.classList.add("dipilih");
            sortAktif = urutan;

            const labels = { default: "Urutkan", az: "A → Z", za: "Z → A" };
            document.getElementById("dropdownLabel").textContent = labels[urutan];

            document.getElementById("dropdownTrigger").classList.remove("open");
            document.getElementById("dropdownMenu").classList.remove("open");

            renderKartu();
        }

        // 7. INTERAKSI NAVBAR & HAMBURGER MENU SINKRON MAIN PAGE
        window.addEventListener("scroll", function() {
            const header = document.getElementById("siteHeader");
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });

        const menuBtn = document.getElementById("menuBtn");
        const mobileNav = document.getElementById("mobileNav");

        function tutupMenu() {
            mobileNav.classList.remove("active");
            menuBtn.innerHTML = "&#9776;";
        }

        menuBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            mobileNav.classList.toggle("active");
            this.innerHTML = mobileNav.classList.contains("active") ? "&#10006;" : "&#9776;";
        });

        // Handler Klik di Luar penutup otomatis modular
        document.addEventListener("click", function(e) {
            const wrapper = document.getElementById("dropdownWrapper");
            if (wrapper && !wrapper.contains(e.target)) {
                document.getElementById("dropdownTrigger").classList.remove("open");
                document.getElementById("dropdownMenu").classList.remove("open");
            }

            if (!menuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
                tutupMenu();
            }
        });

        // 8. INITIALIZATION
        renderKartu();