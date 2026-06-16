  window.addEventListener('scroll', function() {
            const header = document.getElementById('siteHeader');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Hamburger Menu & Logic Interaction
        const menuBtn = document.getElementById('menuBtn');
        const mobileNav = document.getElementById('mobileNav');
        
        menuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            
            if (mobileNav.classList.contains('active')) {
                menuBtn.innerHTML = "&#10006;"; // Simbol Silang (✖)
            } else {
                menuBtn.innerHTML = "&#9776;"; // Simbol Hamburger (☰)
            }
        });