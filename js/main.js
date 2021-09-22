const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    speed: 900,
    touchEventsTarget: true,

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