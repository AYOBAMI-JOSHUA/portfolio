let burgerBtn = document.querySelector(".Burger-menu-button");
let burgerMenu = document.querySelector(".Burger-menu");

let isBurgerOpen = false;

burgerBtn.onclick = function () {
    if (isBurgerOpen) {
        burgerMenu.style.display = "block";
        burgerBtn.style.backgroundPosition = "center left 50px, center";
        isBurgerOpen = true;
    }
    else if (isBurgerOpen) {
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = "center, center left 50px";
        isBurgerOpen = false;
    }
} 