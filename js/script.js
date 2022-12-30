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






let prodElement = document.querySelectorAll('.prod')
const btnLazy = document.querySelector('.lazy__btn')


for(let i = 0; i < prodElement.length; i++){
    btnLazy.addEventListener("click", function(){
        if(i > 3 && i < 8){
            function elementOpacity_3_and_8(){
                prodElement[i].style.opacity = '1'
            }
            setTimeout(elementOpacity_3_and_8, 600)
            prodElement[i].style.display = ''
        }         
    })
}

for(let i = 0; i < prodElement.length; i++){
    if(i > 3 && i < 8){
        prodElement[i].style.display = 'none'
        prodElement[i].style.opacity = '0'
    }     
}


const btnLazyAll = document.querySelectorAll('.lazy__btn')


for(let i = 0; i < prodElement.length; i++){
    if(i < 3){
        for(let btnLZ of btnLazyAll){
            btnLZ.style.display = 'none'
        }
        
    } else{
        for(let btnLZ of btnLazyAll){
            btnLZ.style.display = ''
        } 
    } 
    
} 

const wrappProdAll = document.querySelectorAll('.tab-window')
let site = 0
for (let wrappProd of wrappProdAll){
    site = wrappProd.querySelectorAll('.prod').length
    if(site > 4){
        wrappProd.querySelector('.lazy__btn').style.display = ''
    } else{
        wrappProd.querySelector('.lazy__btn').style.display = 'none'
    }  
}






const anchors = document.querySelectorAll('a.link__menu')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href')
        
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}



const prodElementAll = document.querySelectorAll('.prod')
const namesProd = document.querySelector('.names__prod')
const cenaProd = document.querySelector('.cena__prod')
const sizeFormActual = document.querySelector('.size__form')
const inputFormProd = document.querySelectorAll('.form__prod')
const submitBtnProd = document.querySelector('.submit__btn-prod')
const formPopupProd = document.querySelector('.form__popup-prod')
const popupProduct = document.getElementById('popup__product')
const validFormProd = document.querySelector('.valid__form-prod')
const closeValidProd = document.querySelector('.close__valid-prod')

for ( prodElAll of prodElementAll){
    prodElAll.addEventListener("click", function(){
        namesProd.value = prodElAll.querySelector('.prod__name').textContent.trim()
        cenaProd.value = prodElAll.querySelector('.cena').textContent.trim()
        sizeFormActual.innerHTML = prodElAll.querySelector('.size').textContent
        function popupProdOpacity(){
            popupProduct.style.opacity = '1'
        }
        setTimeout(popupProdOpacity, 600)
        popupProduct.style.display = 'block'
    })
    
}

const closeFormProd = document.querySelector('.close__form-prod')

closeFormProd.addEventListener("click", function(){
    namesProd.value = ''
    cenaProd.value = ''
    sizeFormActual.innerHTML = ''
    for(inputFprod of inputFormProd){
        inputFprod.value = ''
    }
    function popupProdOpacity(){
        popupProduct.style.display = ''
    }
    setTimeout(popupProdOpacity, 600)
    popupProduct.style.opacity = ''
})

submitBtnProd.addEventListener("click", function(){
    formPopupProd.style.display = 'none'
    function resetForm(){
        namesProd.value = ''
        cenaProd.value = ''
        sizeFormActual.innerHTML = ''
        for(inputFprod of inputFormProd){
            inputFprod.value = ''
        }
    }
    setTimeout(resetForm, 600)
    validFormProd.style.display = 'flex'
})

closeValidProd.addEventListener("click", function(){
    validFormProd.style.display = 'none'
    function popupProdOpacity(){
        popupProduct.style.display = ''
        formPopupProd.style.display = ''
    }
    setTimeout(popupProdOpacity, 600)
    popupProduct.style.opacity = '' 
    
})
