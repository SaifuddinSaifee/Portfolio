function random225() {
    return Math.floor(Math.random() * 225 + 1);
}

function myColor() {
    return "rgb(" + random225() + ", " + random225() + ", " + random225() + ")";
}

const btn = document.getElementById("btn");
const copy_text = document.getElementById("color_box");
// const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const thisColor = myColor();
    document.body.style.backgroundColor = thisColor;
    document.querySelector(".color").innerText = thisColor;

    navigator.clipboard.writeText(thisColor);
    setTimeout(function () {
        alert("This color has been copied to your clipboard!");
    }, 450);
});
