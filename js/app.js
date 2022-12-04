"use strict";
const hamburgerButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation-mobile");
const homeMenu = document.querySelector(".navigation__item-home");
const navMenuButtons = document.querySelectorAll(".navigation-mobile__item");
homeMenu.addEventListener("click", () => {
    window.scrollTo({ top: 0 });
});
hamburgerButton.addEventListener("click", () => {
    hamburgerButton.classList.toggle("isActive");
    navMenu.classList.toggle("isActive");
});
const hideMenu = () => {
    hamburgerButton.classList.toggle("isActive");
    navMenu.classList.toggle("isActive");
};
const jumpToTop = () => {
    window.scrollTo({ top: 0 });
    hideMenu();
};
//# sourceMappingURL=app.js.map