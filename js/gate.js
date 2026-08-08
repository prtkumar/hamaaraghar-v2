const entrance = document.getElementById("entrance");
const gate = document.getElementById("gate");

let opened = false;

function openGate() {

    if (opened) return;
    opened = true;

    gate.classList.add("open");

    setTimeout(() => {
        entrance.classList.add("hide");
    }, 1800);

}

gate.addEventListener("click", openGate);
gate.addEventListener("touchstart", openGate);
