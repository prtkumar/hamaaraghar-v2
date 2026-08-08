const gate = document.getElementById("gate");

gate.addEventListener("click",()=>{

    gate.classList.add("open");

    setTimeout(()=>{

        window.location.href="home.html";

    },1600);

});
