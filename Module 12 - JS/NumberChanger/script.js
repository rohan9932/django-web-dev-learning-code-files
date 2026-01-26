const num = document.querySelector("#num");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const btns = document.querySelectorAll(".btns")

decreaseBtn.addEventListener("click", () => {
    num.textContent--;
});

increaseBtn.addEventListener("click", () => {
    num.textContent++;
});

btns.forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "royalblue";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "tomato";
    });
});