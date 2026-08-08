const gate = document.getElementById("gate");
const entrance = document.getElementById("entrance");

gate.addEventListener("click", () => {

    gate.classList.add("open");

    setTimeout(() => {

        entrance.classList.add("hide");

        setTimeout(() => {

            window.location.href = "home.html";

        },1200);

    },1600);

});
