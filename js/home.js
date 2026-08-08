window.onload = () => {

    const left = document.querySelector(".left");
    const right = document.querySelector(".right");

    document.getElementById("gate").onclick = () => {

        left.classList.add("open");
        right.classList.add("open");

    };

};
