document.addEventListener('DOMContentLoaded', () => {

    // MOBILE HERO SCREEN SECTION SLIDER 
    // Mengambil semua slide
    const slides = document.querySelectorAll('.mobile-cta-slider-slide');

    // Pastikan slide ada sebelum menjalankan animasi
    if (slides.length > 0) {
        let slideIndex = 0;

        // Fungsi untuk menampilkan slide dengan animasi fade dan zoom in
        function showSlides() {
            // Mengatur animasi fade-out pada slide saat ini
            gsap.to(slides[slideIndex], {
                opacity: 0,
                duration: 1.5, // Durasi fade-out
                ease: "none"
            });

            // Mengubah indeks slide ke slide berikutnya
            slideIndex = (slideIndex + 1) % slides.length;

            // Membuat timeline baru untuk animasi zoom in dan fade-in
            const tl = gsap.timeline();

            // Menambahkan animasi fade-in ke timeline
            tl.fromTo(slides[slideIndex], {
                opacity: 0
            }, {
                opacity: 1,
                duration: 1.5, // Durasi fade-in
                ease: "none"
            });

            // Menambahkan animasi zoom in ke timeline
            tl.fromTo(slides[slideIndex], {
                scale: 1
            }, {
                scale: 1.2,
                duration: 10, // Durasi zoom in
                ease: "none"
            }, "<"); // "<" memastikan animasi zoom in dimulai bersamaan dengan fade-in
        }

        // Menetapkan slide pertama dengan opacity 1 dan scale 1
        gsap.set(slides[0], {
            opacity: 1,
            scale: 1
        });

        // Memanggil fungsi showSlides untuk slide pertama saat halaman dimuat
        const tlInitial = gsap.timeline();
        tlInitial.fromTo(slides[0], {
            scale: 1
        }, {
            scale: 1.2,
            duration: 10, // Durasi zoom in
            ease: "none"
        });

        // Mengatur interval untuk memanggil fungsi showSlides setiap 7 detik
        setInterval(showSlides, 7000); // Ubah slide setiap 7 detik
    } else {
        console.log("No '.mobile-cta-slider-slide' elements found on this page.");
    }
    // END OF MOBILE SCREEN HERO SECTION SLIDER

    // PC SCREEN HERO SECTION SLIDER
    const swiper = new Swiper('.banner-container', {
        loop: true, // Pengulangan otomatis
        autoplay: {
            delay: 4000, // Durasi antara slide
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.banner-pagination',
            clickable: true,
        },
        effect: 'fade', // Efek fade-in/fade-out antar slide
    });
    // END OF PC SCREEN HERO SECTION SLIDER

    // FEATURE SECTION IMAGE SLIDER
    const images3Row = new Swiper('.images-3-row', {
        slidesPerView: 3, // 3 images on desktop
        spaceBetween: 5, // Space between images
        freeMode: true,
        freeModeSticky: true,
        breakpoints: {
            890: {
                slidesPerView: 3, // 2 images on mobile
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2, // 2 images on mobile
                spaceBetween: 10
            },
            0: {
                slidesPerView: 1, // 1 image on very small screens
                spaceBetween: 10
            }
        },
    });

    const images2Row = new Swiper('.images-2-row', {
        slidesPerView: 2, // 3 images on desktop
        spaceBetween: 5, // Space between images
        freeMode: true,
        freeModeSticky: true,
        breakpoints: {
            640: {
                slidesPerView: 2, // 2 images on mobile
                spaceBetween: 10
            },
            0: {
                slidesPerView: 1, // 1 image on very small screens
                spaceBetween: 10
            }
        },
    });
    // END OF FEATURE SECTION IMAGE SLIDER


    // MEDIA WITH TEXT SLIDER
    var mwtSlider = new Swiper(".mwt-slider-wrapper ", {
        slidesPerView: 1, // Pastikan hanya 1 slide yang muncul pada satu waktu
        spaceBetween: 0,  // Spasi antara slide
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        grabCursor: true,
        navigation: {
            nextEl: ".mwt-slider-button-next",
            prevEl: ".mwt-slider-button-prev",
        },
        on: {
            slideChange: function () {
                let index = mwtSlider.activeIndex;

                // Hide all descriptions and show the one corresponding to the current slide
                document.querySelectorAll('.description').forEach((desc, i) => {
                    desc.classList.remove('active');
                    if (i === index) {
                        desc.classList.add('active');
                    }
                });

                // Animate the new active description
                if (document.querySelector(".description.active")) {
                    gsap.fromTo(".description.active", {
                        opacity: 0,
                        y: 20
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5
                    }
                    );
                }
            },
        },
    });

    // GSAP Animasi Deskripsi pertama kali
    if (document.querySelector(".description.active")) {
        gsap.fromTo(".description.active", {
            opacity: 0, y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5
        }
        );
    }
    // END OF MEDIA WITH TEXT SLIDER

    // MEDIA WITH TEXT SLIDER 2
    var mwtSlider2 = new Swiper(".mwt-slider-wrapper-2 ", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        grabCursor: true,
        navigation: {
            nextEl: ".mwt-slider-button-next-2",
            prevEl: ".mwt-slider-button-prev-2",
        },
        on: {
            slideChange: function () {
                let index = mwtSlider2.activeIndex;

                // Hide all descriptions and show the one corresponding to the current slide
                document.querySelectorAll('.description-2').forEach((desc, i) => {
                    desc.classList.remove('active');
                    if (i === index) {
                        desc.classList.add('active');
                    }
                });

                // Animate the new active description
                if (document.querySelector(".description-2.active")) {
                    gsap.fromTo(".description-2.active", {
                        opacity: 0,
                        y: 20
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5
                    }
                    );
                }
            },
        },
    });

    // GSAP Animasi Deskripsi pertama kali
    if (document.querySelector(".description-2.active")) {
        gsap.fromTo(".description-2.active", {
            opacity: 0, y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5
        }
        );
    }
    // END OF MEDIA WITH TEXT SLIDER 2

    // MEDIA WITH TEXT SLIDER 3
    var mwtSlider3 = new Swiper(".mwt-slider-wrapper-3", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        grabCursor: true,
        navigation: {
            nextEl: ".mwt-slider-button-next-3",
            prevEl: ".mwt-slider-button-prev-3",
        },
        on: {
            slideChange: function () {
                let index = mwtSlider3.activeIndex;

                // Hide all descriptions and show the one corresponding to the current slide
                document.querySelectorAll('.description-3').forEach((desc, i) => {
                    desc.classList.remove('active');
                    if (i === index) {
                        desc.classList.add('active');
                    }
                });

                // Animate the new active description
                if (document.querySelector(".description-3.active")) {
                    gsap.fromTo(".description-3.active", {
                        opacity: 0,
                        y: 20
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5
                    }
                    );
                }
            },
        },
    });

    // GSAP Animasi Deskripsi pertama kali
    if (document.querySelector(".description-3.active")) {
        gsap.fromTo(".description-3.active", {
            opacity: 0, y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5
        }
        );
    }
    // END OF MEDIA WITH TEXT SLIDER 3

    // MEDIA WITH TEXT SLIDER 4
    var mwtSlider4 = new Swiper(".mwt-slider-wrapper-4", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        grabCursor: true,
        navigation: {
            nextEl: ".mwt-slider-button-next-4",
            prevEl: ".mwt-slider-button-prev-4",
        },
        on: {
            slideChange: function () {
                let index = mwtSlider4.activeIndex;

                // Hide all descriptions and show the one corresponding to the current slide
                document.querySelectorAll('.description-4').forEach((desc, i) => {
                    desc.classList.remove('active');
                    if (i === index) {
                        desc.classList.add('active');
                    }
                });

                // Animate the new active description
                if (document.querySelector(".description-4.active")) {
                    gsap.fromTo(".description-4.active", {
                        opacity: 0,
                        y: 20
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5
                    }
                    );
                }
            },
        },
    });

    // GSAP Animasi Deskripsi pertama kali
    if (document.querySelector(".description-4.active")) {
        gsap.fromTo(".description-4.active", {
            opacity: 0, y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5
        }
        );
    }
    // END OF MEDIA WITH TEXT SLIDER 4

    // GALLERY SLIDER
    const gallerySlider = new Swiper('.gallery-slider', {
        spaceBetween: 15,
        effect: 'slide',
        freeMode: true,
        freeModeSticky: true,
        loop: false,
        navigation: {
            nextEl: '.gallery-slider-button-next',
            prevEl: '.gallery-slider-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 7,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 5,
                spaceBetween: 15,
            },
        }
    });

    const galleryFullWidthSlider = new Swiper('.gallery-full-width-slider', {
        spaceBetween: 0,
        effect: 'fade',
        loop: true,
        navigation: {
            nextEl: '.gallery-full-width-slider-button-next',
            prevEl: '.gallery-full-width-slider-button-prev',
        },
        slidesPerView: 1, // Tampilkan 1 slide pada satu waktu
        breakpoints: {
            640: {
                slidesPerView: 1, // Tetap 1 slide pada resolusi >= 640px
            },
            768: {
                slidesPerView: 1, // Tetap 1 slide pada resolusi >= 768px
            },
            1024: {
                slidesPerView: 1, // Tetap 1 slide pada resolusi >= 1024px
            },
        }
    });
    // END OF GALLERY SLIDER

    // GALLERY THUMB SLIDER
    var thumbSwiper = new Swiper('.thumb-swiper-container', {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: false,
        effect: 'slide',
        watchSlidesProgress: true,
        lazy: true,
        preloadImages: false,
    });

    var mainSwiper = new Swiper('.main-swiper-container', {
        spaceBetween: 0,
        lazy: true,
        preloadImages: false,
        navigation: {
            nextEl: '.gallery-thumb-slider-button-next',
            prevEl: '.gallery-thumb-slider-button-prev',
        },
        thumbs: {
            swiper: thumbSwiper
        },
        scrollbar: {
            el: '.gallery-thumb-slider-scrollbar',
            hide: false, // Menampilkan scrollbar sepanjang waktu
            draggable: true,
        },
    });
});