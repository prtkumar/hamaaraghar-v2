const gate = document.getElementById("gate");
const entrance = document.getElementById("entrance");

const left = document.querySelector(".left");
const right = document.querySelector(".right");

let opened = false;

gate.addEventListener("click", openGate);
gate.addEventListener("touchstart", openGate, { passive: true });

function openGate(){

    if(opened) return;
    opened = true;

    left.style.transform = "translateX(-105%)";
    right.style.transform = "translateX(105%)";

    setTimeout(()=>{
        entrance.style.opacity = "0";
    },1800);

    setTimeout(()=>{
        entrance.style.display = "none";
    },2600);

}
