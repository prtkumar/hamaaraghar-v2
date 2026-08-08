const entrance=document.getElementById("entrance");
const gate=document.getElementById("gate");
const home=document.getElementById("home");

gate.onclick=()=>{

gate.classList.add("open");

entrance.classList.add("open");

setTimeout(()=>{

entrance.classList.add("hide");

home.classList.add("show");

},2200);

}
