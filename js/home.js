// ===== HAMAARA GHAR =====

const world = document.getElementById("world");
const gate = document.getElementById("gate");
const fade = document.getElementById("fade");

let opened = false;

function openGate() {

    if (opened) return;
    opened = true;

    gate.style.transition = "transform 2.2s ease, opacity 2.2s ease";
    gate.style.transform = "scale(1.05)";
    gate.style.opacity = "0";

    fade.style.transition = "opacity 2.2s ease";
    fade.style.opacity = "1";

    setTimeout(() => {

        gate.style.display = "none";
        fade.style.opacity = "0";

    }, 2200);

}

world.addEventListener("click", openGate);
world.addEventListener("touchstart", openGate, { passive: true });
