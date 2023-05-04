// navbar Email
const emailNav = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

// aside
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");


emailNav.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    const isMobileMenuClosed = aside.classList.contains("inactive");
    
    if (!isMobileMenuClosed) {
        aside.classList.add("inactive");    
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive");
    
    if (!isAsideClosed) {
        aside.classList.add("inactive");    
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenu = desktopMenu.classList.contains("inactive");
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");    
    }

    if (!isDesktopMenu) {
        desktopMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");
}