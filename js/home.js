// ===== HAMAARA GHAR =====

const world = document.getElementById("world");
const gate = world.querySelector("img");
const fade = document.getElementById("fade");
const ui = document.getElementById("ui");

let opened = false;

gate.addEventListener("click", openGate);
gate.addEventListener("touchstart", openGate, { passive: true });

function openGate(e){

    e.preventDefault();

    if(opened) return;
    opened = true;

    gate.style.transition =
        "transform 2.4s ease, opacity 2.4s ease";

    gate.style.transform = "scale(1.08)";
    gate.style.opacity = "0";

    fade.style.transition = "opacity 2s ease";
    fade.style.opacity = "0";

    setTimeout(() => {

        world.style.display = "none";

        document.body.classList.add("entered");

    },2200);

}
