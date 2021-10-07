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

  $('.parallax-window').parallax({imageSrc: '../img/newsletter-bg.jpg'});

//   ymaps.ready(init);
//   function init(){
//       var myMap = new ymaps.Map("map", {
//           center: [52.34654597, 4.83099345],
//           zoom: 15
//       });
//       myGeoObject = new ymaps.GeoObject({
//         // Описание геометрии.
//         geometry: {
//             type: "Point",
//             coordinates: [52.34654597, 4.83099345]
//         },
//         // Свойства.
//         properties: {
//             // Контент метки.
//             iconContent: 'Grand Hilton Hotel'
//         }
//     }, {
//         // Опции.
//         // Иконка метки будет растягиваться под размер ее содержимого.
//         preset: 'islands#redStretchyIcon',
//     });

// myMap.geoObjects
//     .add(myGeoObject)
// }

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
    document.querySelector(".body").classList.toggle("body-scroll");
  })

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal-dialog__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    document.querySelector(".body").classList.add("body-scroll");
    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.addClass("modal-overlay__visible");
    modalDialog.addClass("modal-dialog__visible");

    document.body.onkeydown = function(e){
      e = e || window.event;
      var c = e.keyCode;
      if(c === 27) modalOverlay.removeClass("modal-overlay__visible") && 
      modalDialog.removeClass("modal-dialog__visible") && 
      document.querySelector(".body").classList.remove("body-scroll");
      }
      
      document.addEventListener("click", function (e) {
        const wrap = e.target.classList.contains('modal-overlay__visible');
        if(!wrap) return;
        e.preventDefault();
        modalOverlay.removeClass("modal-overlay__visible") && 
      modalDialog.removeClass("modal-dialog__visible") && 
      document.querySelector(".body").classList.remove("body-scroll");
    }.bind(this));
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.removeClass("modal-overlay__visible");
    modalDialog.removeClass("modal-dialog__visible");
    document.querySelector(".body").classList.remove("body-scroll");
  }
  
  //Настройки валидации

  $(document).ready(function(){
    $('.phone').mask('+7 (000) 000-00-00');
  }),

  $('.form').each(function () {
    

    $.validator.methods.phone = function( value, element ) {
      return this.optional( element ) || /\+7+ \([0-9][0-9][0-9]\) +[0-9][0-9][0-9]+\-+[0-9][0-9]+\-+[0-9][0-9]+/.test( value );
    }

    $.validator.methods.email = function( value, element ) {
      return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
    }
    $(this).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          phone: true
        }
      },
      messages: {
        name: {
          required: "Please, write your name",
          minlength: jQuery.validator.format("At least 2 characters required!")
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Write your phone number",
          phone: "Your phone should be like +7 (xxx) xxx-xx-xx"
        }
      }
    });
  });
  AOS.init();
});