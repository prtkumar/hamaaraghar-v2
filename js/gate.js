const entrance = document.getElementById("entrance");
const gate = document.getElementById("gate");

gate.addEventListener("click",()=>{

    gate.classList.add("open");
    entrance.classList.add("open");

    setTimeout(()=>{

        entrance.classList.add("hide");

    },1800);

    setTimeout(()=>{

        window.location.href="home.html";

    },3000);

});
