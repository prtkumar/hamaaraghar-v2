const gate = document.getElementById("gate");
const entrance = document.getElementById("entrance");
const world = document.getElementById("world");

gate.addEventListener("click", () => {

    gate.classList.add("open");

    setTimeout(() => {
        entrance.style.opacity = "0";
    }, 1700);

    setTimeout(() => {
        entrance.style.display = "none";
    }, 2500);

    setTimeout(() => {
        world.classList.add("show");
    }, 600);

});

setTimeout(()=>{

document
.getElementById("scene")
.style.transform="scale(1.12)";

},500);
