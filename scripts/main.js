"use strict";

const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");

// Show Menu
navToggle.addEventListener("click", () => {
    navToggle.classList.add("hidden");
    navClose.classList.remove("hidden");

    navMenu.classList.add("show-menu");
});

//  Hide Menu
navClose.addEventListener("click", () => {
    navToggle.classList.remove("hidden");
    navClose.classList.add("hidden");

    navMenu.classList.remove("show-menu");
});

/* ================= Dark / Light Theme ================== */
const themeBtn = document.querySelector("#theme-btn");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

// Previously selected theme
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the intergace has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
    themeBtn.classList.contains(iconTheme) ? "fas fa-moon" : "fas fa-sun";

// We validate if the user previously had preference
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeBtn.classList[selectedIcon === "fas fa-moon" ? "add" : "remove"](
        iconTheme
    );
}

// Activate / Deactivate the theme manually with the button
themeBtn.addEventListener("click", () => {
    // Add or remove the dark icon theme
    document.body.classList.toggle(darkTheme);
    themeBtn.classList.toggle(iconTheme);

    // Save the theme and the current icon that the user chooses
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});
