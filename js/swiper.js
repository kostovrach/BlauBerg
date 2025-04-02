new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    effect: 'slider',
    slidesPerView: 1,
    spaceBetween: 25,
    keyboard: {
        enabled: true,
        onlyInviewport: true,
        pageUpDown: true,
    },
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed: 800,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: false,
        dynamicBullets: true,
    },
    breakpoints: {
        655: {
            slidesPerView: 2
        },
        862: {
            slidesPerView: 3
        },
        1353: {
            slidesPerView: 2
        },
    },
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: true,
        loadPrevNext: true,
    },
    watchSlidesProgress: true,
    watchSlidesVisability: true,
});