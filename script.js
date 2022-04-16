"use strict";

const menu_toggle = document.querySelector(".mobile-menu");
const mobile_menu_toggle = document.querySelector(".mobile-menu-canvas");
const mobile_menu_close = document.querySelector(".exit-canvas");

menu_toggle.addEventListener("click", function () {
  mobile_menu_toggle.classList.toggle("hide");
});

mobile_menu_close.addEventListener("click", function () {
  mobile_menu_toggle.classList.toggle("hide");
});
