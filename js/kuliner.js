
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
