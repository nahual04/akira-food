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