const gate = document.getElementById("gate");

gate.addEventListener("click", () => {
    gate.classList.toggle("open");
});

gate.addEventListener("touchstart", () => {
    gate.classList.toggle("open");
}, { passive: true });
