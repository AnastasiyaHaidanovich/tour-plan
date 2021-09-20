const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoheight: true,
    watchOverflow: true,

    // Navigation arrows
    navigation: {
      nextEl: '.slider-button__next',
      prevEl: '.slider-button__prev',
    },
    
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });