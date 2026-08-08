const gate = document.getElementById("gate");
const leftDoor = document.querySelector(".left");
const rightDoor = document.querySelector(".right");

let opened = false;

gate.addEventListener("click", openGate);
gate.addEventListener("touchstart", openGate, { passive: true });

function openGate(){

    if(opened) return;
    opened = true;

    leftDoor.style.transform = "translateX(-100%)";
    rightDoor.style.transform = "translateX(100%)";

    setTimeout(()=>{
        gate.style.display = "none";
    },2000);

}
