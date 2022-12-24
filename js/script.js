const titleHeader = document.querySelector('.title')
function visibleTitle(){
    titleHeader.style.opacity = '1'
}
setTimeout(visibleTitle, 500)

const descHeader = document.querySelector('.desc')
function visibleDesc(){
    descHeader.style.opacity = '1'
}
setTimeout(visibleDesc, 700)


var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})


const burger = document.querySelector('.burger__icon');
const menuUl = document.querySelector('.menu__ul');
const closeBtn = document.querySelector('.close__btn');
const MainMenu = document.querySelector('.main__menu');
const linkMenu = document.querySelectorAll('.link__menu')

burger.addEventListener("click", function(){
    MainMenu.style.display = 'block';
    function menuNone(){
        menuUl.style.transform = 'translate(0)';
        MainMenu.style.zIndex = '999';
    }
    setTimeout(menuNone, 700)
    

});

closeBtn.addEventListener("click", function(){
    menuUl.style.transform = 'translate(100vw)';
    function zIndex(){
        MainMenu.style.zIndex = '';
        MainMenu.style.display = '';
    }
    setTimeout(zIndex, 900);
});



if (screen.width < 991){
    for (linkM of linkMenu){
        linkM.addEventListener("click", function(){
            menuUl.style.transform = 'translate(100vw)';
            function zIndex(){
                MainMenu.style.zIndex = '';
                MainMenu.style.display = '';
            }
            setTimeout(zIndex, 900); 
        })
    } 
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }, 
    autoplay: {
        delay: 4000,
    }, 
});







const popupFirst = document.getElementById('popup__first')
const btnSubmit = document.querySelector('.submit__btn')
const formPopup = document.querySelector('.form__popup')
const btnFirstPopup = document.querySelector('.first__popup')
const formArea = document.querySelectorAll('.form__area')
const validBlock = document.querySelector('.valid__form')
const closeFirstPopup = document.querySelector('.close__form')
const closeValid = document.querySelector('.close__valid')


btnFirstPopup.addEventListener("click", function(){
    popupFirst.style.display = 'block';
    function firstPopupVisible(){
        popupFirst.style.opacity = '1'
    }
    setTimeout(firstPopupVisible, 700)
})


closeFirstPopup.addEventListener("click", function(){
    popupFirst.style.opacity = '0';
    function noneCloseButton(){
        popupFirst.style.display = ''; 
    }
    setTimeout(noneCloseButton, 700)
})


btnSubmit.addEventListener("click", function(){
    formPopup.style.display = 'none';
    function valueClear(){
        for (let formA of formArea){
            formA.value = '';
        }
    }
    setTimeout(valueClear, 200)
    validBlock.style.display = 'flex';
})

closeValid.addEventListener("click", function(){
    validBlock.style.opacity = '0';
    function validHidden(){
        validBlock.style.display = '';
        popupFirst.style.display = ''; 
        popupFirst.style.opacity = ''; 
        formPopup.style.display = '';
    }
    setTimeout(validHidden, 700)
    function validOpacityOff(){
        validBlock.style.opacity = '';
    }
    setTimeout(validOpacityOff, 700)
})



// Core
function Tabs ( options ) {
    this.node = options.node;
    this.links = options.node.querySelectorAll( '.tab-link' );
    this.windows = options.node.querySelectorAll( '.tab-window' );
    this.activeIndex = 0;
    this.initColled = false;
    
    this.node.tabs = this;
    
    this.init();
};

Tabs.prototype.init = function () {
    if ( !this.initColled ) {
    for ( let i = 0; i < this.links.length; i++ ) {
        this.link = this.links[i];
        this.handlerClick( this.link, i )
        
        this.windows[i].style.display = 'none'
        this.windows[0].style.display = 'block'
        this.links[0].classList.add( 'active' )
    }
    }
};

Tabs.prototype.handlerClick = function ( link, index ) {
    link.addEventListener( 'click', function () {
    this.goToTab( index )
    }.bind( this ))
};

Tabs.prototype.goToTab = function ( index ) {
    if ( index !== this.activeIndex && index >= 0 && index <= this.links.length ) {
    this.links[ this.activeIndex ].classList.remove( 'active' );
    this.links[ index ].classList.add( 'active' );
    this.windows[ this.activeIndex ].style.display = 'none'
    this.windows[ index ].style.display = 'block'
    this.activeIndex = index;
    }
};


// Init
document.addEventListener( 'DOMContentLoaded', function () {
    let tabs = document.querySelector( '.tabs' );
    new Tabs({ node: tabs });
});