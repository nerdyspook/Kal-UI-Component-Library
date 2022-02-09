/** ================= Close Alert ================ **/
const closeBtn = document.querySelectorAll(".close-btn");

closeBtn.forEach((btn) =>
    btn.addEventListener(
        "click",
        () => (btn.parentElement.style.display = "none")
    )
);

// For Reset Button
const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () => {
    closeBtn.forEach((btn) => {
        if (btn.parentElement.style.display === "none")
            btn.parentElement.style.display = "block";
    });
});
