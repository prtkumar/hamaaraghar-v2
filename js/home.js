window.addEventListener("load", () => {

  const gate = document.getElementById("gate");
  const fade = document.getElementById("fade");

  gate.addEventListener("click", () => {

    gate.style.transition = "transform 2s ease";
    gate.style.transform = "scale(1.15)";
    gate.style.opacity = "0";

    fade.style.opacity = "1";

    setTimeout(() => {
      fade.style.opacity = "0";
    }, 1200);

  });

});
