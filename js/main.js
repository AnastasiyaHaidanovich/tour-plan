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

  ymaps.ready(init);
  function init(){
      var myMap = new ymaps.Map("map", {
          center: [52.34654597, 4.83099345],
          zoom: 15
      });
      myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [52.34654597, 4.83099345]
        },
        // Свойства.
        properties: {
            // Контент метки.
            iconContent: 'Grand Hilton Hotel'
        }
    }, {
        // Опции.
        // Иконка метки будет растягиваться под размер ее содержимого.
        preset: 'islands#redStretchyIcon',
    });

myMap.geoObjects
    .add(myGeoObject)
}

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