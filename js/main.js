const hotelSwiper = new Swiper('.hotel-swiper', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    speed: 900,
    touchEventsTarget: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-swiper__next',
      prevEl: '.hotel-swiper__prev',
    },
    
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },    
  });
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    // Optional parameters
    loop: true,
    effect: 'slide',
    speed: 900,
    touchEventsTarget: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-swiper__next',
      prevEl: '.reviews-swiper__prev',
    },
    
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },    
  });