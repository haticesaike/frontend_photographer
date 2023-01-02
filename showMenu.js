const toggleButton = document.getElementsByClassName('burger');
nav = document.getElementsByClassName('nav_menu');

function showHide() {
    nav[0].classList.toggle('navbar-show');
}

const showMenu = () =>{
    if (toggleButton && nav) {
        toggleButton[0].addEventListener("click", showHide)
        
    }
}

showMenu()