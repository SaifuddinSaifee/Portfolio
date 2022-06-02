const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function randomIndex() {
    return Math.floor(Math.random() * 15 + 1);
}

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let thisColor = "#";
    for (let i = 0; i < 6; i++) {
        thisColor += hex[randomIndex()];
    }
    document.body.style.backgroundColor = thisColor;
    document.querySelector(".color").innerText = thisColor;

    navigator.clipboard.writeText(thisColor);
    setTimeout(function () {
        alert("This color has been copied to your clipboard!");
    }, 450);
});
