/* ===========================================================
   Marketplace Slider
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const marketplaceSwiper = new Swiper(".marketplaceSwiper", {

        /* Layout */
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: false,

        /* Infinite Loop */
        loop: true,
        loopAdditionalSlides: 3,

        /* Speed */
        speed: 700,

        /* Cursor */
        grabCursor: true,

        /* Observe changes */
        observer: true,
        observeParents: true,

        /* Navigation */
        navigation: {
            nextEl: ".marketplace-next",
            prevEl: ".marketplace-prev",
        },

        /* Keyboard */
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

        /* Mouse Wheel (optional) */
        mousewheel: {
            forceToAxis: true,
        },

        /* Autoplay */
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        /* Responsive */
        breakpoints: {

            0: {
                slidesPerView: 1,
                spaceBetween: 18,
            },

            576: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 22,
            },

            992: {
                slidesPerView: 3,
                spaceBetween: 24,
            },

            1400: {
                slidesPerView: 3,
                spaceBetween: 30,
            }

        }

    });

});