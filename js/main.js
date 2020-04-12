let canvas = document.getElementById("board");
let ctx = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = 'right';

function createBackground() {
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function gameLoop() {
    createBackground();
    createSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == 'right') snakeX += box;
    if (direction == 'left') snakeX -= box;
    if (direction == 'down') snakeY += box;
    if (direction == 'up') snakeY -= box;

    snake.pop();
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let game = setInterval(gameLoop, 100);
