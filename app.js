window.addEventListener("load", () => {

    const gate = document.getElementById("gate");

    gate.animate(
        [
            {
                transform: "scale(0.94)",
                opacity: 0
            },
            {
                transform: "scale(1)",
                opacity: 1
            }
        ],
        {
            duration: 1800,
            easing: "ease-out",
            fill: "forwards"
        }
    );

});
