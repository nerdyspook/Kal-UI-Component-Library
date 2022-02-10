"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-back");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
const body = document.querySelector("body");

/* ============ Close Modal ============ */
const closeModal = function () {
    body.style.overflow = "auto";
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
};

/* ============ Open Modal ============ */
const openModal = function () {
    body.style.overflow = "hidden";
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});
