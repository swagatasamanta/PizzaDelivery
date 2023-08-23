let navbar  = document.querySelector('.navbar');
//--------------------------------------------------------------------------------------------
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
//--------------------------------------------------------------------------------------------


document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active'); 
    searchItem.classList.remove('active');
    cartItem.classList.remove('active');
    loginForm.classList.remove('active'); //-------------------------------------//
}

let searchItem  = document.querySelector('.search-form');
//---------------------------------------------------------------------
formBtn.addEventListener('click',() =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active');
});
//------------------------------------------------------------------
document.querySelector('#search-btn').onclick = () =>{
    searchItem.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    loginForm.classList.remove('active');
}

let cartItem  = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchItem.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchItem.classList.remove('active');
    cartItem.classList.remove('active');
    loginForm.classList.remove('active');
}

