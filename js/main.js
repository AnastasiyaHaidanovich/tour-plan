const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoheight: true,
    watchOverflow: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper__next',
      prevEl: '.swiper__prev',
    },
    
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });