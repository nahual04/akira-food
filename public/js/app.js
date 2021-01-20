// DROPDOWN MENU MOBILE
const dropDown = document.querySelector('#dropMenu');
const openDropDown = document.querySelector('#dropMobile');

dropDown.addEventListener('click', () => {
    // console.log('me diste click')
    openDropDown.classList.toggle('hidden')
})
// END DROPDOWN MENU MOBILE

// DROPDOWN USER OPTIONS
const dropDownUser = document.querySelector('#opUser');
const openDropDownUser = document.querySelector('#dropUser');

dropDownUser.addEventListener('click', () => {
    // console.log('me diste click')
    openDropDownUser.classList.toggle('hidden')
})
// END DROPDOWN USER OPTIONS

//MODAL
var openmodal = document.querySelectorAll('.modal-open')
for (var i = 0; i < openmodal.length; i++) {
    openmodal[i].addEventListener('click', function(event){
    event.preventDefault()
    toggleModal()
    })
}

const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)

var closemodal = document.querySelectorAll('.modal-close')
for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener('click', toggleModal)
}

document.onkeydown = function(evt) {
    evt = evt || window.event
    var isEscape = false
    if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc")
    } else {
    isEscape = (evt.keyCode === 27)
    }
    if (isEscape && document.body.classList.contains('modal-active')) {
    toggleModal()
    }
};


function toggleModal () {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
}
//END MODAL

// HIDE NAVBAR ON SCROLL DOWN
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('nav').outerHeight();

// $(window).scroll(function(event){
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);

// function hasScrolled() {
//     var st = $(this).scrollTop();
    
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
   
//     if (st > lastScrollTop && st > navbarHeight){
//         $('nav').removeClass('nav-down').addClass('nav-up');
//     } else {
//         if(st + $(window).height() < $(document).height()) {
//             $('nav').removeClass('nav-up').addClass('nav-down');
//         }
//     }
    
//     lastScrollTop = st;
// }
//END HIDE NAVBAR ON SCROLL DOWN

// CHANGE BACKGROUND NAVBAR ON TOP
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if(scroll < 80){
      $('.fixed-top').css('background', 'transparent');
      $('.fixed-top').css('box-shadow', 'none');
  } else{
      $('.fixed-top').css('background', 'rgba( 255, 255, 255, 1)');
      $('.fixed-top').css('box-shadow', '0px 4px 16px rgba(0, 0, 0, 0.25)');
  }          
});         
// END CHANGE BACKGROUND NAVBAR ON TOP

//SIDEBAR
$(document).ready(function() {

    function toggleSidebar() {
      $(".btn-cesta").toggleClass("active");
      $("main").toggleClass("move-to-left");
      $(".sidebar-item").toggleClass("active");
    }

    $(".btn-cesta").on("click tap", function() {
      toggleSidebar();
    });

    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        toggleSidebar();
      }
    });

});
//SIDEBAR

//SWIPER
var swiper = new Swiper('.swiper-container', {
    // centeredSlides: true,
    loop: true,
    slidesPerView: 3.5,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 1.8,
            spaceBetween: 20,
        },
        520: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        630: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 2.1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2.8,
          spaceBetween: 25,
        },
      }
});
//SWIPER




