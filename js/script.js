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



let thumbnails = document.getElementsByClassName("thumbnail");
let overlay = document.getElementById("overlay");
let overlayClose = document.getElementById("overlay-close");
let overlayImage = document.getElementById("overlay-image");

for (let i = 0; i < thumbnails.length; i++) { 
//    console.log(thumbnails[i].src)
thumbnails[i].addEventListener("click", openOverlay)
};


overlayClose.addEventListener("click", closeOverlay);

overlay.addEventListener("keydown", overlay);
overlayClose.addEventListener("click", closeOverlay);

function closeOverlay(event) {
if (event.keyCode !== 27) {
    return;
}
    overlay.classList.toggle("open");
}


function closeOverlay(event){
overlay.classList.toggle("open")
}

function openOverlay(event){
overlay.classList.toggle("open");
overlayImage.src = event.target.src;
}








const prodElement = document.querySelectorAll('.prod')
const btnLazy = document.querySelector('.lazy__btn')


const elem4 = prodElement[4]
btnLazy.addEventListener("click", function(){
    function elem4Opacity(){
        elem4.style.opacity = '1';
    }
    setTimeout(elem4Opacity, 600)
    elem4.style.display = '';
})

const elem5 = prodElement[5]
btnLazy.addEventListener("click", function(){
    function elem5Opacity(){
        elem5.style.opacity = '1'; 
    }
    setTimeout(elem5Opacity, 600)
    elem5.style.display = '';
})


const elem6 = prodElement[6]
btnLazy.addEventListener("click", function(){
    function elem6Opacity(){
        elem6.style.opacity = '1';
    }
    setTimeout(elem6Opacity, 600)
    elem6.style.display = '';
})






const elem7 = prodElement[7]
btnLazy.addEventListener("click", function(){
    function elem7Opacity(){
        elem7.style.opacity = '1';
    }
    setTimeout(elem7Opacity, 600)
    elem7.style.display = '';
})

const elem8 = prodElement[8]
btnLazy.addEventListener("click", function(){
    function elem44Opacity(){
        elem8.style.opacity = '1';
    }
    setTimeout(elem44Opacity, 600)
    elem8.style.display = '';
})

const elem9 = prodElement[9]
btnLazy.addEventListener("click", function(){
    function elem55Opacity(){
        elem9.style.opacity = '1'; 
    }
    setTimeout(elem55Opacity, 600)
    elem9.style.display = '';
})

const elem10 = prodElement[10]
btnLazy.addEventListener("click", function(){
    function elem66Opacity(){
        elem10.style.opacity = '1';
    }
    setTimeout(elem66Opacity, 600)
    elem10.style.display = '';
})

const elem11 = prodElement[11]
btnLazy.addEventListener("click", function(){
    function elem77Opacity(){
        elem11.style.opacity = '1';
    }
    setTimeout(elem77Opacity, 600)
    elem11.style.display = '';
})



const elem44 = prodElement[4] 
elem44.style.opacity = '0'
elem44.style.display = 'none';

const elem55 = prodElement[5]
elem55.style.opacity = '0'
elem55.style.display = 'none';

const elem66 = prodElement[6]
elem66.style.opacity = '0'
elem66.style.display = 'none';

const elem77 = prodElement[7]
elem77.style.opacity = '0'
elem77.style.display = 'none';

const elem88 = prodElement[8]
elem88.style.opacity = '0'
elem88.style.display = 'none';

const elem99 = prodElement[9]
elem99.style.opacity = '0'
elem99.style.display = 'none';

const elem100 = prodElement[10]
elem100.style.opacity = '0'
elem100.style.display = 'none';

const elem110 = prodElement[11]
elem110.style.opacity = '0'
elem110.style.display = 'none';



