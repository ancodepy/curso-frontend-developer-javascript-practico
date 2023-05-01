const emailNav = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

emailNav.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}