$(document).ready(function () {
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

  var menuButton = document.querySelector(".menu-button")

  menuButton.addEventListener('click', function () {
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom__visible");
  })

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
  }
  

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal-dialog__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.addClass("modal-overlay__visible");
    modalDialog.addClass("modal-dialog__visible");
    document.body.onkeydown = function(e){
      e = e || window.event;
      var c = e.keyCode;
      if(c === 27) modalOverlay.removeClass("modal-overlay__visible") && 
      modalDialog.removeClass("modal-dialog__visible");
      }

      disable_scroll();
      
      document.addEventListener("click", function (e) {
        const wrap = e.target.classList.contains('modal-overlay__visible');
        if(!wrap) return;
        e.preventDefault();
        modalOverlay.removeClass("modal-overlay__visible") && 
      modalDialog.removeClass("modal-dialog__visible");
    }.bind(this));
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.removeClass("modal-overlay__visible");
    modalDialog.removeClass("modal-dialog__visible");
  }
  
});