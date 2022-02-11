"use strict";

const body = document.querySelector("body");
const toastBtn = document.querySelector(".show-toast");
const toasts = document.querySelector("#toasts");

const createNotification = (seconds) => {
    const notification = `
    <div class="toast" id="toast">
        <div class="alert success close" id="success-close">
            <div class="icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <p class="info">
                This is a success alert —
                <a href="" class="text-link">check it out!</a>
            </p>
            <button type="button" class="close-btn">
                <i class="fas fa-times"></i>
            </button>
        </div>
    </div>
    `;
    toasts.innerHTML = notification;
    const toast = document.querySelector("#toast");

    setTimeout(() => {
        toast.remove();
    }, seconds * 1000);
};

toastBtn.addEventListener("click", () => {
    createNotification(2);
    const closeBtn = document.querySelectorAll(".close-btn");

    closeBtn.forEach((btn) =>
        btn.addEventListener(
            "click",
            () => (btn.parentElement.style.display = "none")
        )
    );
});
