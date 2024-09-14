document.addEventListener('DOMContentLoaded', () => {

    const products = [
        { name: 'My Ombre Unisex', price: 165000, image: 'https://zakkyzalfa.github.io/wdparfume/assets/images/my-ombre-unisex.jpeg', link: 'https://zakkyzalfa.github.io/wdparfume/pages/products/myOmbre.html', category: 'unisex', labels: ["Populer"] },
        { name: 'Lesables Unisex', price: 170000, image: 'https://zakkyzalfa.github.io/wdparfume/assets/images/lesables-unisex.jpeg', link: 'https://zakkyzalfa.github.io/wdparfume/pages/products/lesables.html', category: 'unisex', labels: ["Populer"] },
        { name: 'Kiss Unisex', price: 175000, image: 'https://zakkyzalfa.github.io/wdparfume/assets/images/kiss-unisex.jpeg', link: 'https://zakkyzalfa.github.io/wdparfume/pages/products/kiss.html', category: 'unisex', labels: [] },
        { name: 'Honey Unisex', price: 175000, image: 'https://zakkyzalfa.github.io/wdparfume/assets/images/honey-unisex.jpeg', link: 'https://zakkyzalfa.github.io/wdparfume/pages/products/honey.html', category: 'unisex', labels: [] },
        { name: 'Bacca Top Unisex', price: 180000, image: 'https://zakkyzalfa.github.io/wdparfume/assets/images/bacca-top-unisex.jpeg', link: 'https://zakkyzalfa.github.io/wdparfume/pages/products/baccaTop.html', category: 'unisex', labels: [] },
        { name: 'Black Opium Unisex', price: 155000, image: 'https://zakkyzalfa.github.io/wdparfume/assets/images/black-opium-unisex.jpeg', link: 'https://zakkyzalfa.github.io/wdparfume/pages/products/blackOpium.html', category: 'unisex', labels: [] },
        { name: 'King Bal`s Unisex', price: 160000, image: 'https://zakkyzalfa.github.io/wdparfume/assets/images/black-opium-unisex.jpeg', link: 'https://zakkyzalfa.github.io/wdparfume/pages/products/kingBals.html', category: 'unisex', labels: [] },
        { name: 'Delin Woman', price: 185000, image: 'https://zakkyzalfa.github.io/wdparfume/assets/images/delin-woman.jpeg', link: 'https://zakkyzalfa.github.io/wdparfume/pages/products/delin.html', category: 'woman', labels: ["Populer"] },
        { name: 'MOI Woman', price: 175000, image: 'https://zakkyzalfa.github.io/wdparfume/assets/images/moy-woman.jpeg', link: 'https://zakkyzalfa.github.io/wdparfume/pages/products/moi.html', category: 'woman', labels: ["Populer"] },
        { name: 'Rainbow Love Woman', price: 170000, image: 'assets/images/rainbow-love-woman.jpeg', link: 'https://zakkyzalfa.github.io/wdparfume/pages/products/rainbowLove.html', category: 'woman', labels: [] },
        { name: 'Princess Woman', price: 170000, image: 'https://zakkyzalfa.github.io/wdparfume/assets/images/princess-woman.jpeg', link: 'https://zakkyzalfa.github.io/wdparfume/pages/products/princess.html', category: 'woman', labels: [] },
        { name: 'Queen of Rose Woman', price: 170000, image: 'assets/images/queen-of-rose-woman.jpeg', link: 'https://zakkyzalfa.github.io/wdparfume/pages/products/queenOfRose.html', category: 'woman', labels: [] },
        { name: 'Treesame Man', price: 140000, image: 'https://zakkyzalfa.github.io/wdparfume/assets/images/treesame-man.jpeg', link: 'https://zakkyzalfa.github.io/wdparfume/pages/products/treesame.html', category: 'man', labels: ["Populer"] },

        { name: 'Brightening Body Lotion', price: 250000, image: 'https://zakkyzalfa.github.io/wdparfume/assets/images/brightening-body-lotion.jpeg', link: 'https://zakkyzalfa.github.io/wdparfume/pages/products/brighteningBodyLotion.html', category: 'body-lotion', labels: ["new"] },
    ];

    function formatPrice(price) {
        return price.toLocaleString('id-ID');
    }

    /* PENCARIAN PRODUK */
    const searchButton = document.getElementById('search-button');
    const searchForm = document.querySelector('.search-form');
    const searchContent = document.getElementById('search-content');
    const searchBox2 = document.querySelector('.search-box2');
    const searchInput = searchForm.querySelector('input');

    const overlay = document.getElementById('overlay');

    if (searchButton) {
        searchButton.addEventListener('click', function () {
            const searchContent = document.getElementById('search-content');
            overlay.classList.add('show-overlay');
            searchContent.classList.toggle('show-search');
            document.body.classList.toggle('lock'); // Lock body scroll
            window.lenisMain.stop();
        });
    }

    searchInput.addEventListener('input', debounce(function () {
        const query = searchInput.value.toLowerCase().trim();
        if (query !== "") {
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(query)
            );

            // Prioritaskan produk yang dimulai dengan query
            const sortedProducts = filteredProducts.sort((a, b) => {
                if (a.name.toLowerCase().startsWith(query) && !b.name.toLowerCase().startsWith(query)) {
                    return -1;
                }
                if (!a.name.toLowerCase().startsWith(query) && b.name.toLowerCase().startsWith(query)) {
                    return 1;
                }
                return a.name.localeCompare(b.name);
            });

            displaySearchResults(sortedProducts); // Memanggil fungsi khusus untuk hasil pencarian
            searchBox2.classList.remove('hidden'); // Tampilkan elemen saat ada input
            searchBox2.classList.add('active');
        } else {
            searchBox2.classList.add('hidden'); // Sembunyikan elemen saat input kosong
            searchBox2.classList.remove('active');
            searchBox2.innerHTML = ''; // Hapus hasil pencarian
        }
    }, 300)); // Delay 300ms sebelum fungsi dijalankan

    /* Fungsi debounce untuk menunda eksekusi fungsi hingga interval waktu tertentu */
    function debounce(func, delay) {
        let timeout;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    }

    const searchCloseButton = document.getElementById('search-close');
    if (searchCloseButton) {
        searchCloseButton.addEventListener('click', function () {
            overlay.classList.remove('show-overlay');
            searchContent.classList.remove('show-search');
            document.body.classList.remove('lock'); // Allow scrolling again
            // Mengaktifkan kembali Lenis scrolling
            window.lenisMain.start();
            searchInput.value = ""; // Kosongkan input
            searchBox2.innerHTML = ''; // Kosongkan hasil pencarian
            searchBox2.classList.add('hidden'); // Sembunyikan hasil pencarian
            searchButton.classList.remove('bx-x'); // Reset button icon
        });
    }


    // FUNCTION UNTUK MENAMPILKAN HASIL PENCARIAN
    function displaySearchResults(products) {
        if (products.length === 0) {
            searchBox2.innerHTML = `
                <div class="preview-product-info-wrapper">
                    <div class="preview-product-info">
                        <h5>Produk Tidak di Temukan</h5>
                        <h6>Produk tidak ada</h6>
                    </div>
                </div>
            `;
        } else {
            searchBox2.innerHTML = products.map(product => {
                return `
                    <a href="${product.link}" aria-label="Lihat detail produk ${product.name}">
                        <div class="preview-image-wrapper">
                            <div class="preview-image">
                                <img src="${product.image}" alt="${product.name}" loading="lazy">
                            </div>
                        </div>
                        <div class="preview-product-info-container">
                            <div class="preview-product-info-wrapper">
                                <div class="preview-product-info">
                                    <h6>${product.category}</h6>
                                    <h5>${product.name}</h5>
                                    <h6>Rp. ${formatPrice(product.price)},-</h6>
                                </div>
                            </div>
                        </div>    
                    </a>
                `;
            }).join('');
        }
        searchBox2.classList.add('active'); // Tambahkan kelas aktif untuk memunculkan hasil pencarian
    }

    // DEBOUNCE FUNCTION
    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }


    // PRODUCT LIST
    const productList = document.querySelector('.products');
    if (productList) {
        const filterButtons = document.querySelectorAll('.filter-nav button');
        const dropdownButton = document.querySelector('.dropdown-button');
        const dropdownContent = document.querySelector('.dropdown-content');
        const dropdownItems = document.querySelectorAll('.dropdown-content a');
        const dropdownText = document.querySelector('.dropdown-text');

        let currentPage = 1;
        const productsPerPage = 5;
        let currentCategory = 'all';

        function displayLabels(labels) {
            return labels.map(label => `<span class="label ${label.toLowerCase()}">${label}</span>`).join('');
        }

        function displayProductList(products) {
            productList.innerHTML = products.map(product => `
            <div class="row-product">
                <a class="link-product" href="${product.link}">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        ${displayLabels(product.labels)}
                    </div>
                    <div class="product-specifications">
                        <h3>${product.name}</h3>
                        <p>Rp. ${formatPrice(product.price)},-</p>
                    </div>
                </a>
            </div>
        `).join('');

            // Setelah produk ditampilkan, tambahkan animasi GSAP
            const row = gsap.utils.toArray('.row-product');
            row.forEach((row, index) => {
                gsap.fromTo(row,
                    { opacity: 0, y: -20 },  // Memulai dengan opacity 0 dan sedikit di atas posisinya
                    {
                        opacity: 1,
                        y: 0,                 // Mengakhiri animasi dengan opacity 1 dan di posisi semula
                        duration: 0.2,        // Durasi animasi setiap row
                        ease: "none",         // Transisi linear tanpa easing
                        scrollTrigger: {
                            trigger: row,       // Memicu animasi ketika row masuk viewport
                            start: 'top 90%',   // Memulai animasi saat 80% bagian row terlihat
                            toggleActions: 'play none none none',  // Hanya memutar animasi saat scrolling
                            invalidateOnRefresh: true, // Memastikan animasi diperbarui saat refresh
                        }
                    }
                );
            });
        }

        function updateProducts() {
            const filteredProducts = currentCategory === 'all'
                ? products
                : products.filter(product => product.category === currentCategory);
            displayProductList(filteredProducts);
            ScrollTrigger.refresh(); // Refresh GSAP setelah mengubah filter
        }

        if (dropdownButton && dropdownContent && dropdownText) {
            dropdownButton.addEventListener('click', () => {
                dropdownContent.classList.toggle('show');
                dropdownButton.classList.toggle('active');
            });

            // Menambahkan event listener untuk teks dan ikon di dalam tombol dropdown
            dropdownButton.querySelector('.dropdown-text').addEventListener('click', (event) => {
                dropdownContent.classList.toggle('show');
                dropdownButton.classList.toggle('active');
                event.stopPropagation();
            });

            dropdownButton.querySelector('i').addEventListener('click', (event) => {
                dropdownContent.classList.toggle('show');
                dropdownButton.classList.toggle('active');
                event.stopPropagation();
            });

            dropdownItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentCategory = item.getAttribute('data-filter');
                    currentPage = 1; // Reset ke halaman pertama saat filter berubah
                    updateProducts();

                    // Update button text
                    dropdownText.innerText = item.innerText;

                    // Sembunyikan dropdown setelah memilih
                    dropdownContent.classList.remove('show');
                    dropdownButton.classList.remove('active');
                });
            });

            // Sembunyikan dropdown ketika mengklik di luar elemen dropdown
            window.addEventListener('click', (e) => {
                if (!e.target.matches('.dropdown-button')) {
                    if (dropdownContent.classList.contains('show')) {
                        dropdownContent.classList.remove('show');
                        dropdownButton.classList.remove('active');
                    }
                }
            });
        }

        // Panggil updateProducts dengan kategori 'all' saat halaman dimuat pertama kali
        updateProducts();

        // Menandai tombol "all" sebagai aktif saat halaman pertama kali dimuat
        const allFilterButton = document.querySelector('[data-filter="all"]');
        if (allFilterButton) {
            allFilterButton.classList.add('active');
        }
    }

    // PRODUCT SLIDER
    function displayLabels(labels) {
        return labels.map(label => `<span class="label ${label.toLowerCase()}">${label}</span>`).join('');
    }

    function displayProductSlider(products, containerSelector) {
        const productContainer = document.querySelector(`${containerSelector} .swiper-wrapper`);
        if (!productContainer) return; // Jika elemen tidak ditemukan, keluar dari fungsi

        productContainer.innerHTML = products.map(product => `
        <div class="swiper-slide product-slider-slide">
            <a class="link-product" href="${product.link}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${displayLabels(product.labels)}
                </div>
                <div class="product-specifications">
                    <h3>${product.name}</h3>
                    <p>Rp. ${formatPrice(product.price)},-</p> 
                </div>
            </a>
        </div>
    `).join('');

        // Initialize Swiper
        const swiper = new Swiper(containerSelector, {
            slidesPerView: 4,
            //spaceBetween: 20,
            effect: 'slide',
            loop: false,
            navigation: {
                nextEl: `${containerSelector} + .pagination .product-slider-button-next`,
                prevEl: `${containerSelector} + .pagination .product-slider-button-prev`,
            },
            scrollbar: {
                el: `${containerSelector} + .pagination .product-slider-scrollbar`,
                hide: false,
                draggable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    //spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    //spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    //spaceBetween: 40,
                },
            }
        });
    }

    // Menampilkan seluruh produk tanpa filter
    const allProducts = products; // Menggunakan seluruh produk yang ada

    // Menampilkan produk berdasarkan konteks yang berbeda-beda
    const recommendedProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 8); // Mengambil 8 produk acak
    const popularProducts = products.filter(product => product.labels.includes("Populer"));
    const cheapestProducts = [...products].sort((a, b) => a.price - b.price);

    // Menampilkan produk berdasarkan kategori yang berbeda-beda
    const unisexProducts = products.filter(product => product.category === "unisex");
    const womanProducts = products.filter(product => product.category === "woman");
    const manProducts = products.filter(product => product.category === "man");
    const bodyLotionProducts = products.filter(product => product.category === "body lotion");

    // Menampilkan seluruh produk
    displayProductSlider(allProducts, '.all-products-slider-container');

    // Menampilkan produk berdasarkan konteksyang berbeda beda
    displayProductSlider(recommendedProducts, '.recommended-slider-container'); // produk acak
    displayProductSlider(popularProducts, '.popular-slider-container');
    displayProductSlider(cheapestProducts, '.cheapest-slider-container');

    // Menampilkan produk berdasarkan kategori
    displayProductSlider(unisexProducts, '.unisex-slider-container');
    displayProductSlider(womanProducts, '.woman-slider-container');
    displayProductSlider(manProducts, '.man-slider-container');
    displayProductSlider(bodyLotionProducts, '.body-lotion-slider-container');
});