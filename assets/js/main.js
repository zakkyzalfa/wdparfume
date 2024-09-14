document.addEventListener('DOMContentLoaded', () => {
    // LENIS for Main Page
    window.lenisMain = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        direction: 'vertical',
        gestureDirection: 'vertical',
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function rafMain(time) {
        lenisMain.raf(time);
        requestAnimationFrame(rafMain);
    }

    requestAnimationFrame(rafMain);

    /* NAVBAR KETIKA DI SCROLL */
    const navigationBar = document.querySelector(".navigation-bar");

    if (navigationBar) {
        const isPageWithHero = document.body.classList.contains("page-with-hero-section");
        const isDarkPage = document.body.classList.contains("dark-page");
        const isHeaderTransparent = document.body.classList.contains("header-transparent");

        const handleScroll = () => {
            // Tambahkan class 'scrolled' saat halaman di-scroll pada layar besar
            if (window.innerWidth > 760) {
                navigationBar.classList.toggle("scrolled", window.scrollY > 0);
            } else {
                // Jika body memiliki class 'header-transparent' pada layar kecil
                if (isHeaderTransparent) {
                    // Hanya tambahkan class 'scrolled' saat scroll pada layar kecil
                    navigationBar.classList.toggle("scrolled", window.scrollY > 0);
                } else {
                    // Tambahkan class 'scrolled' secara default pada layar kecil tanpa transparansi
                    navigationBar.classList.add("scrolled");
                }
            }
        };

        if (isPageWithHero) {
            window.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", handleScroll);
            handleScroll();
        } else {
            navigationBar.classList.add("scrolled");
        }
    }

    /* NAVBAR KETIKA DI MOBILE (RESPONSIVE) */
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.querySelector('.main-navigation');

    if (menuIcon && navMenu) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navMenu.classList.toggle('open');
        };
    }

    // ACCORDION PRODUCT
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');

            if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
                gsap.to(content, {
                    maxHeight: content.scrollHeight + 'px',
                    opacity: 1,
                    duration: 0.2,
                    ease: 'sine.out'
                });
                gsap.to(icon, {
                    rotate: '180deg',
                    duration: 0.2,
                    ease: 'power2.out'
                });
            } else {
                gsap.to(content, {
                    maxHeight: 0,
                    opacity: 0,
                    duration: 0.1,
                    ease: 'sine.in'
                });
                gsap.to(icon, {
                    rotate: '0deg',
                    duration: 0.1,
                    ease: 'power2.in'
                });
            }
        });
    });

    // ACCORDION PRODUCT
    document.querySelectorAll('.accordion-header-harga').forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');

            if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
                gsap.to(content, {
                    maxHeight: content.scrollHeight + 'px',
                    opacity: 1,
                    duration: 0.2,
                    ease: 'sine.out'
                });
                gsap.to(icon, {
                    rotate: '180deg',
                    duration: 0.2,
                    ease: 'power2.out'
                });
            } else {
                gsap.to(content, {
                    maxHeight: 0,
                    opacity: 0,
                    duration: 0.1,
                    ease: 'sine.in'
                });
                gsap.to(icon, {
                    rotate: '0deg',
                    duration: 0.1,
                    ease: 'power2.in'
                });
            }
        });
    });

    // ANIMATION GSAP

    // Animasi Logo
    if (document.querySelector(".logo-wrapper")) {
        gsap.from(".logo-wrapper", {
            duration: 1,
            y: -20,
            opacity: 0,
            ease: "power3.out",
            delay: 0.3
        });
    }

    // Animasi Nav Menu
    if (document.querySelector(".nav-menu li")) {
        gsap.from(".nav-menu li", {
            duration: 1,
            y: -20,
            opacity: 0,
            ease: "power3.out",
            stagger: 0.1, // animasi per item menu secara bergantian
            delay: 0.6
        });
    }

    // Animasi Nav Icons
    if (document.querySelector(".nav-icon")) {
        gsap.from(".nav-icon", {
            duration: 1,
            opacity: 0,
            ease: "power3.out",
            delay: 0.8
        });
    }

    // Animasi untuk teks di dalam hero section (PC)
    if (document.querySelector(".banner-content")) {
        gsap.from(".banner-content h1 span, .banner-content h5, .banner-content p, .banner-content .button", {
            duration: 1.3,
            y: 20, // Slide teks dari bawah ke atas
            opacity: 0, // Animasi fade-in
            ease: "power3.out",
            delay: 0.2, // Delay setelah navbar
            stagger: 0.2 // Stagger animasi per elemen teks
        });
    }

    // Animasi untuk teks di dalam mobile CTA (Mobile)
    if (document.querySelector(".mobile-cta")) {
        gsap.from(".mobile-cta .brand-text-1, .mobile-cta .brand-text-2", {
            duration: 1.5,
            y: 20,
            opacity: 0,
            ease: "power3.out",
            delay: 0.5,
            stagger: 0.2
        });
    }

    // Animasi untuk teks di dalam announcement bar
    if (document.querySelector(".announcement-bar-item")) {
        gsap.from(".announcement-bar-item p, .announcement-bar-item span", {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "power3.out",
            delay: 0.8,
            stagger: 0.1
        });
    }

    // Animasi untuk teks di dalam top-page section
    if (document.querySelector(".top-page-wrapper")) {
        gsap.from(".top-page-wrapper h1, .top-page-wrapper h4, .top-page-wrapper p, .top-page-wrapper .center-button", {
            duration: 0.8,
            y: 20,
            opacity: 0,
            ease: "power3.out",
            delay: 0.3,
            stagger: 0.2
        });
    }


    gsap.registerPlugin(ScrollTrigger);

    // Animasi untuk gambar dan teks pada section dengan class 'feature'
    document.querySelectorAll('.feature').forEach(feature => {
        console.log('Animating feature section:', feature);
        gsap.from(feature.querySelectorAll('.heading h1, .heading h3, .images-box img, .text p'), {
            scrollTrigger: {
                trigger: feature,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1
        });
    });

    // Animasi untuk gambar dan teks pada section dengan class 'mwt-slider'
    if (document.querySelector(".mwt-slider-container")) {
        gsap.from('.mwt-slider-container', {
            scrollTrigger: {
                trigger: '.mwt-slider',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            x: -20,
            duration: 0.8,
            stagger: 0.1
        });
    }

    // Animasi untuk gambar dan teks pada section dengan class 'media-with-text-wrapper'
    if (document.querySelector(".media-with-text-wrapper")) {
        gsap.from('.media-with-text-wrapper', {
            scrollTrigger: {
                trigger: '.media-with-text-wrapper',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            x: -20,
            duration: 0.8,
            stagger: 0.1
        });
    }

    // Animasi untuk heading dan paragraf di bagian heading-center
    if (document.querySelector(".heading-center")) {
        gsap.from('.heading-center h2, .heading-center p', {
            scrollTrigger: {
                trigger: '.heading-center',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1
        });
    }

    // Cek apakah ada elemen .mwt-slider-container-2 di halaman
    const containers = gsap.utils.toArray('.mwt-slider-container-2');

    if (containers.length) {
        containers.forEach((container, index) => {
            let direction = index % 2 === 0 ? -100 : 100;  // Tentukan arah: elemen genap (0, 2, 4, dst) dari kiri ke kanan, ganjil dari kanan ke kiri

            gsap.from(container, {
                scrollTrigger: {
                    trigger: container,       // Setiap elemen memiliki trigger-nya sendiri
                    start: 'top 75%',         // Animasi dimulai ketika elemen terlihat 75% di viewport
                    toggleActions: 'play none none none',
                },
                opacity: 0,                 // Awal opacity 0 untuk fade-in effect
                x: direction,               // Geser dari kiri (-100px) atau kanan (+100px)
                y: 20,                      // Geser sedikit ke bawah
                duration: 0.8,              // Durasi animasi
                ease: 'power2.out',         // Easing untuk membuat animasi smooth
            });
        });
    } else {
        console.log('Tidak ada elemen .mwt-slider-container-2 ditemukan.');
    }

    // Animasi untuk elemen dalam call-to-action section
    if (document.querySelector(".call-to-action-wrapper")) {
        gsap.to('.call-to-action-wrapper', {
            scrollTrigger: {
                trigger: '.call-to-action',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            stagger: 0.2
        });
        // Animasikan heading
        gsap.from('.call-to-action-wrapper h2', {
            scrollTrigger: {
                trigger: '.call-to-action',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power2.out',
        });
        // Animasikan gambar
        gsap.from('.call-to-action-wrapper .center-image img', {
            scrollTrigger: {
                trigger: '.call-to-action',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: 'back.out(1.7)',
        });
        // Animasikan paragraf
        gsap.from('.call-to-action-wrapper p', {
            scrollTrigger: {
                trigger: '.call-to-action',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
        });
        // Animasikan tombol
        gsap.from('.call-to-action-wrapper .center-button', {
            scrollTrigger: {
                trigger: '.call-to-action',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power2.out',
            delay: 0.5
        });
    }

    // Cek apakah ada elemen .products-slider di halaman
    const productSliders = document.querySelectorAll('.products-slider');

    if (productSliders.length) {
        productSliders.forEach(productSlider => {
            console.log('Animating products section:', productSlider);
            gsap.from(productSlider.querySelectorAll('.products-heading h2, .products-heading h3, .products-heading a'), {
                scrollTrigger: {
                    trigger: productSlider,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
                opacity: 0,
                y: 20,
                duration: 0.8,
                stagger: 0.1
            });

            const sliderContainers = productSlider.querySelectorAll('.popular-slider-container, .recommended-slider-container, .cheapest-slider-container, .unisex-slider-container, .woman-slider-container, .man-slider-container, .body-lotion-slider-container');
            if (sliderContainers.length > 0) {
                gsap.from(sliderContainers, {
                    scrollTrigger: {
                        trigger: productSlider,
                        start: 'top 60%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                });
            }

            gsap.from(productSlider.querySelectorAll('.pagination'), {
                scrollTrigger: {
                    trigger: productSlider,
                    start: 'top 40%',
                    toggleActions: 'play none none none',
                },
                opacity: 0,
                y: 20,
                duration: 0.8,
            });
        });
    } else {
        console.log('No product sliders found on this page.');
    }

    // Cek apakah ada elemen .products-list-section di halaman
    const productLists = document.querySelectorAll('.products-list-section');

    if (productLists.length) {
        productLists.forEach(productList => {
            // Animasi untuk heading (h2, h3)
            const headings = productList.querySelectorAll('.products-heading h2, .products-heading h3');

            if (headings.length) {  // Pastikan headings ada
                gsap.from(headings, {
                    scrollTrigger: {
                        trigger: productList,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    stagger: 0.1
                });
            }
        });
    } else {
        console.log('No products list sections found on this page.');
    }

    // Cek keberadaan elemen sebelum menjalankan animasi GSAP
    if (document.querySelector('.gallery')) {
        gsap.from('.gallery', {
            scrollTrigger: {
                trigger: '.gallery',
                start: 'top 60%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            duration: 0.8,
            stagger: 0.1  // Jeda antar elemen
        });
    }

    if (document.querySelector(".faq-wrapper")) {
        gsap.from(".faq-wrapper", {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "power2.out",
        });
    }

    if (document.querySelectorAll('.faq-accordion-item').length) {
        gsap.utils.toArray('.faq-accordion-item').forEach((item, index) => {
            gsap.fromTo(item,
                { opacity: 0, y: 20 }, // Awal animasi (opacity 0, bergeser ke bawah)
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%', // Mulai animasi ketika bagian atas elemen mencapai 80% dari viewport
                        toggleActions: 'play none none none', // Hanya memainkan animasi sekali
                        once: true, // Animasi hanya terjadi sekali
                    }
                }
            );
        });
    }

    // if (document.querySelector('.logo-wrapper-footer')) {
    //     gsap.from('.logo-wrapper-footer', {
    //         scrollTrigger: {
    //             trigger: '.footer',
    //             start: 'top 85%',
    //             toggleActions: 'play none none none',
    //         },
    //         opacity: 0,
    //         y: 20,
    //         duration: 1,
    //         ease: 'power2.out',
    //     });
    // }

    // if (document.querySelector('.navmenu-footer li')) {
    //     gsap.from('.navmenu-footer li', {
    //         scrollTrigger: {
    //             trigger: '.footer',
    //             start: 'top 85%',
    //             toggleActions: 'play none none none',
    //         },
    //         opacity: 0,
    //         y: 20,
    //         duration: 0.8,
    //         stagger: 0.1,  // Memberikan jeda antara setiap item list
    //         ease: 'power2.out',
    //     });
    // }

    // if (document.querySelector('.footer-text')) {
    //     gsap.from('.footer-text', {
    //         scrollTrigger: {
    //             trigger: '.footer',
    //             start: 'top 85%',
    //             toggleActions: 'play none none none',
    //         },
    //         opacity: 0,
    //         y: 20,
    //         duration: 1,
    //         ease: 'power2.out',
    //     });
    // }

    // if (document.querySelector('.social-icon li')) {
    //     gsap.from('.social-icon li', {
    //         scrollTrigger: {
    //             trigger: '.footer',
    //             start: 'top 85%',
    //             toggleActions: 'play none none none',
    //         },
    //         opacity: 0,
    //         y: 20,
    //         duration: 0.8,
    //         stagger: 0.1,  // Ikon akan muncul satu per satu
    //         ease: 'power2.out',
    //     });
    // }

    // if (document.querySelector('.footer-navigation-wrapper')) {
    //     gsap.from('.footer-navigation-wrapper', {
    //         scrollTrigger: {
    //             trigger: '.footer',
    //             start: 'top 85%',
    //             toggleActions: 'play none none none',
    //         },
    //         opacity: 0,
    //         y: 20,
    //         duration: 1,
    //         stagger: 0.1,  // Bagian-bagian ini akan muncul satu per satu
    //         ease: 'power2.out',
    //     });
    // }

    // if (document.querySelector('.foot-copy p')) {
    //     gsap.from('.foot-copy p', {
    //         scrollTrigger: {
    //             trigger: '.footer',
    //             start: 'top 85%',
    //             toggleActions: 'play none none none',
    //         },
    //         opacity: 0,
    //         y: 20,
    //         duration: 0.8,
    //         ease: 'power2.out',
    //     });
    // }

    if (document.querySelector(".contact-description")) {
        gsap.from(".contact-description", {
            duration: 1.2,
            x: -50,
            opacity: 0,
            ease: "power2.out"
        });
    }

    if (document.querySelector(".profile-picture")) {
        gsap.from(".profile-picture", {
            duration: 1,
            y: 50,
            opacity: 0,
            scale: 0.8,
            ease: "power2.out"
        });
    }

    if (document.querySelector(".contact-description h1")) {
        gsap.from(".contact-description h1", {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out",
            delay: 0.2
        });
    }

    if (document.querySelector(".sub-text")) {
        gsap.from(".sub-text", {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out",
            delay: 0.4
        });
    }

    if (document.querySelector(".wrapper-multiple-btn")) {
        gsap.from(".wrapper-multiple-btn", {
            duration: 1.2,
            delay: 0.2,
            y: 50,
            opacity: 0,
            ease: "power2.out"
        });
    }

    if (document.querySelector(".buttons li")) {
        gsap.from(".buttons li", {
            duration: 1,
            x: 30,
            opacity: 0,
            ease: "power3.out",
            stagger: 0.1, // animasi per item menu secara bergantian
            delay: 0.2
        });
    }

    // Mengecek apakah elemen '.product-info' ada sebelum menjalankan animasi
    const productInfo = document.querySelector('.product-info');

    if (productInfo) {
        // Animasi untuk elemen '.product-info'
        gsap.from('.product-info', {
            opacity: 0,          // Awalnya tidak terlihat
            y: 20,               // Sedikit bergeser ke bawah
            duration: 1.5,       // Durasi animasi
            ease: "power2.out",  // Jenis easing
            delay: 0.3           // Penundaan sebelum animasi dimulai
        });

        // Animasi untuk setiap block-item dalam '.product-info-block-item' dengan animasi yang berurutan
        gsap.from('.product-info-block-item', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3, // Memberikan animasi secara berurutan
            delay: 0.5
        });

        // Animasi untuk separator
        gsap.from('.product-info-separator', {
            opacity: 0,
            scaleX: 0, // Mengubah lebar horizontal separator
            transformOrigin: "center", // Animasi dimulai dari tengah
            duration: 1,
            ease: "power2.out",
            delay: 1 // Penundaan animasi setelah elemen lainnya
        });

        // Animasi untuk accordion items
        gsap.from('.accordion-item', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            delay: 1.2
        });
    } else {
        console.log("No '.product-info' element found.");
    }

    // Pastikan elemen-elemen tersebut ada sebelum menjalankan animasi
    const productSpec = document.querySelector('.product-specification');

    if (productSpec) {
        gsap.registerPlugin(ScrollTrigger);

        // Animasi untuk heading (judul produk dan deskripsi)
        gsap.from('.feature-wrapper .heading', {
            opacity: 0,
            y: 20, // Geser elemen ke bawah sebelum animasi
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.feature-wrapper .heading',
                start: 'top 80%',  // Memulai animasi ketika 80% elemen masuk viewport
                end: 'top 50%',    // Mengakhiri animasi ketika elemen mencapai 50% dari viewport
                toggleActions: 'play none none none', // Hanya memutar animasi saat muncul
            }
        });

        // Animasi untuk deskripsi (paragraf text)
        gsap.from('.feature-wrapper .text p', {
            opacity: 0,
            y: 20,
            duration: 1.2,
            ease: 'power2.out',
            stagger: 0.3, // Memberikan jeda antar animasi paragraf
            scrollTrigger: {
                trigger: '.feature-wrapper .text',
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none none',
            }
        });

        // Animasi untuk tabel spesifikasi produk
        gsap.from('.specification-container', {
            opacity: 0,
            x: -20, // Elemen geser dari kiri
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.specification-container',
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none none',
            }
        });

        // Animasi untuk setiap baris spesifikasi
        gsap.from('.spec-row', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power2.out',
            stagger: 0.2, // Animasi berurutan untuk setiap baris
            scrollTrigger: {
                trigger: '.specification-container',
                start: 'top 70%',
                toggleActions: 'play none none none',
            }
        });
    } else {
        console.log("No '.product-specification' element found.");
    }

});