// =============================================================
        // DATABASE ARRAY OF OBJECTS (Local Client Memory)
        // =============================================================
        const datasetFestival = [
            {
                id: "semana-santa",
                title: "Semana Santa",
                meta: "Maret / April — Pekan Suci",
                season: "spring",
                tag: "Religius & Sakral",
                desc: "Prosesi spiritual agung yang menggerakkan seluruh kota, menampilkan boks-boks suci (pasos) antik abad pertengahan yang diusung mengitari kota lama.",
                fullDesc: "Semana Santa (Pekan Suci) di Sevilla adalah salah satu perayaan keagamaan paling terkenal di dunia. Selama seminggu penuh menjelang Paskah, lebih dari 60 persaudaraan keagamaan (cofradías) melakukan prosesi dari gereja masing-masing menuju Katedral Sevilla. Mereka mengusung 'pasos'—tandu kayu raksasa yang memuat patung-patung Yesus dan Bunda Maria yang sangat indah dan antik. Prosesi ini diiringi oleh para 'nazarenos' yang mengenakan jubah bertudung khas serta musik tiup lambat yang menciptakan atmosfer mistis tak terlupakan.",
                image: "image/sevilla-semana-santa.webp",
                ticketUrl: "https://www.ticketmaster.es"
            },
            {
                id: "feria-abril",
                title: "Feria de Abril",
                meta: "April — Dua Minggu Pasca Paskah",
                season: "spring",
                tag: "Sukacita & Budaya",
                desc: "Pekan kegembiraan Sevilla dengan ribuan tenda (casetas), gaun flamenco tradisional, parade kuda megah, dan tarian sevillanas tiada henti.",
                fullDesc: "Dimulai pertama kali pada tahun 1847 sebagai pameran ternak, Feria de Abril kini telah berevolusi menjadi festival perayaan budaya terbesar di Sevilla. Sebuah area raksasa di distrik Los Remedios disulap menjadi kompleks berisi lebih dari 1.000 'casetas' (tenda privat dan publik). Di sini, warga lokal dan pengunjung berdansa Sevillanas sepanjang hari dan malam, mengenakan busana Flamenco berwarna-warni, menikmati hidangan lokal, dan meminum Rebujito dalam atmosfer kegembiraan murni.",
                image: "image/feria-de-abril.jpg",
                ticketUrl: "https://www.viagogo.com"
            },
            {
                id: "corpus-christi",
                title: "Corpus Christi",
                meta: "Juni — Perayaan Monstrans Bunga",
                season: "spring",
                tag: "Religius & Seni",
                desc: "Jalanan berbatu Sevilla berubah menjadi mahakarya hamparan bunga raksasa dalam prosesi sakral yang menghormati tradisi ekaristi.",
                fullDesc: "Perayaan Corpus Christi di Sevilla merupakan salah satu tradisi tertua peninggalan abad ke-13 yang sangat megah. Sehari sebelum prosesi, warga bergotong royong menghiasi jalanan kota tua dengan kelopak bunga berwarna-warni, dedaunan rosemary, dan serbuk kayu wangi. Monstrans perak raksasa (Custodia) abad ke-16 diarak mengelilingi pusat kota lama diiringi orkestra katedral, menciptakan harmoni iman dan visual seni jalanan yang memukau.",
                image: "image/corpus.jpg",
                ticketUrl: "https://www.ticketmaster.es"
            },
            {
                id: "bienal-flamenco",
                title: "Bienal di Flamenco",
                meta: "September / Oktober — Dua Tahunan",
                season: "autumn",
                tag: "Seni Musik & Tari",
                desc: "Festival seni tari dan musik gitar Flamenco paling bergengsi di dunia, mengumpulkan maestro global di panggung teater kuno Sevilla.",
                fullDesc: "Bienal di Flamenco adalah festival seni Flamenco paling terkemuka di dunia yang diadakan setiap dua tahun sekali pada musim gugur. Selama sebulan penuh, teater-teater besar, istana kuno, dan ruang terbuka di seluruh penjuru kota Sevilla berubah menjadi panggung pementasan bagi para penari (bailaores), penyanyi (cantaores), dan gitaris Flamenco terbaik dari seluruh dunia untuk mementaskan karya klasik maupun kontemporer.",
                image: "image/bienal-de-flamenco.webp",
                ticketUrl: "https://www.ticketmaster.es"
            },
            {
                id: "navidad-sevilla",
                title: "Navidad en Sevilla",
                meta: "Desember — Perayaan Natal",
                season: "winter",
                tag: "Tradisi Musim Dingin",
                desc: "Sevilla bersinar dalam magis lampu jutaan watt, pameran belén kuno, dan nyanyian paduan suara jalanan yang menghangatkan musim dingin.",
                fullDesc: "Natal di Sevilla (Navidad Sevillana) menghadirkan transformasi visual yang luar biasa di pusat kota. Area Avenida de la Constitución dan Plaza Nueva dihiasi instalasi lampu spektakuler bertema arsitektur katedral gothik. Sepanjang bulan Desember, warga merayakannya dengan membuka pasar loak seni kuno 'Feria de Belenes', menikmati kue madu tradisional buatan biara, serta mendengarkan grup musik jalanan menyanyikan lagu natal Andalusia (Villancicos) dengan instrumen rebana instan.",
                image: "image/navidad.jpg",
                ticketUrl: "https://www.ticketmaster.es"
            }
        ];

        // =============================================================
        // RENDER CARDS VIA FOREACH LOOP
        // =============================================================
        const cardsGrid = document.getElementById('cardsGrid');

        function renderCards() {
            cardsGrid.innerHTML = '';
            datasetFestival.forEach(item => {
                const card = document.createElement('div');
                card.className = `fest-card`;
                card.setAttribute('data-season', item.season);
                card.setAttribute('id', `card-${item.id}`);

                card.innerHTML = `
                    <div class="card-img-wrapper">
                        <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy" />
                        <span class="card-tag">${item.tag}</span>
                    </div>
                    <div class="card-body">
                        <span class="card-meta">${item.meta}</span>
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-desc">${item.desc}</p>
                        <button class="action-btn" aria-label="Pelajari selengkapnya tentang ${item.title}">Lihat Detail →</button>
                    </div>
                `;

                card.addEventListener('click', () => openModal(item));
                cardsGrid.appendChild(card);
            });
        }

        // =============================================================
        // RENDER TIMELINE TRACK NODES
        // =============================================================
        const timelineTrack = document.getElementById('timelineTrack');

        function renderTimeline() {
            const urutanBulan = [
                { month: "Maret / April", title: "Semana Santa", desc: "Kekhusyukan spiritual, bau dupa pekat, dan lilin menyelimuti kota tua.", refId: "semana-santa" },
                { month: "April", title: "Feria de Abril", desc: "Kompleks casetas dibuka, gaun flamenco, musik, dan tarian rakyat sevillanas.", refId: "feria-abril" },
                { month: "Juni", title: "Corpus Christi", desc: "Parade keagamaan sakral menghias jalanan dengan wewangian kelopak bunga.", refId: "corpus-christi" },
                { month: "September", title: "Bienal di Flamenco", desc: "Panggung maestro dunia unjuk bakat petikan gitar dan hentakan kaki.", refId: "bienal-flamenco" },
                { month: "Desember", title: "Navidad en Sevilla", desc: "Pasar natal antik dibuka di sekitar katedral diselimuti cahaya lampu ornamen.", refId: "navidad-sevilla" }
            ];

            timelineTrack.innerHTML = '';
            urutanBulan.forEach(node => {
                const nodeElement = document.createElement('div');
                nodeElement.className = 'timeline-node';
                if (node.refId !== "") nodeElement.classList.add('highlight');

                nodeElement.innerHTML = `
                    <div class="node-dot"></div>
                    <span class="node-month">${node.month}</span>
                    <h4 class="node-title">${node.title}</h4>
                    <p class="node-desc">${node.desc}</p>
                `;

                if (node.refId !== "") {
                    nodeElement.style.cursor = 'pointer';
                    nodeElement.addEventListener('click', () => {
                        const targetData = datasetFestival.find(f => f.id === node.refId);
                        if (targetData) openModal(targetData);
                    });
                }

                timelineTrack.appendChild(nodeElement);
            });
        }

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

        // =============================================================
        // MODAL SYSTEM
        // =============================================================
        const modalOverlay = document.getElementById('modalOverlay');
        const modalImg = document.getElementById('modalImg');
        const modalMeta = document.getElementById('modalMeta');
        const modalTitle = document.getElementById('modalTitle');
        const modalFullDesc = document.getElementById('modalFullDesc');
        const modalCloseBtn = document.getElementById('modalCloseBtn');

        function openModal(item) {
            modalImg.src = item.image;
            modalImg.alt = item.title;
            modalMeta.textContent = item.meta;
            modalTitle.textContent = item.title;

            modalFullDesc.innerHTML = `
                <p>${item.fullDesc}</p>
                <a href="${item.ticketUrl}" target="_blank" class="modal-ticket-btn">
                    Pesan Tiket Resmi via Platform →
                </a>
            `;

            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        modalCloseBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        // =============================================================
        // GLOBAL SINKRON NAVBAR EFFECT ON SCROLL
        // =============================================================
        window.addEventListener('scroll', function () {
            const header = document.getElementById('siteHeader');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // HAMBURGER MENU CONTROL
        const menuBtn = document.getElementById('menuBtn');
        const mobileNav = document.getElementById('mobileNav');
        const mobileOverlay = document.getElementById('mobileOverlay');

        function toggleMenu(force) {
            const isOpen = force !== undefined ? force : !mobileNav.classList.contains('active');
            mobileNav.classList.toggle('active', isOpen);
            mobileOverlay.classList.toggle('active', isOpen);
            menuBtn.innerHTML = mobileNav.classList.contains('active') ? "&#10006;" : "&#9776;";
            menuBtn.setAttribute('aria-expanded', isOpen);
        }

        menuBtn.addEventListener('click', () => toggleMenu());
        mobileOverlay.addEventListener('click', () => toggleMenu(false));

        // =============================================================
        // BACK TO TOP
        // =============================================================
        const backTop = document.getElementById('backTop');
        window.addEventListener('scroll', () => {
            backTop.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });
        backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

        // =============================================================
        // INITIALIZATION
        // =============================================================
        renderCards();
        renderTimeline();