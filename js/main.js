let canvas = document.getElementById("board");
let ctx = canvas.getContext("2d");
let box = 32;

function createBackground() {
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(0, 0, 16 * box, 16 * box);
}

createBackground();
