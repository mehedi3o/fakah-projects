let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    // loginForm.classList.remove('active');
}

// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
//     loginForm.classList.remove('active');
// }

// window.onscroll = () =>{
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function colsemenu(){
    sidemenu.style.right = "-200px";
}



