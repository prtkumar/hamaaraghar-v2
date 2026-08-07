const door = document.querySelector(".goldDoor");

door.addEventListener("click",()=>{

door.style.transform="scale(.97)";
door.style.filter="brightness(1.35)";

setTimeout(()=>{

door.style.transform="scale(1)";
door.style.filter="brightness(1)";

},700);

});
