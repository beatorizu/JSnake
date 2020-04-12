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

document.addEventListener('keydown', update);

function update(event) {
    if ((event.keyCode == 65 || event.keyCode == 37) && direction != 'right') direction = 'left' // 65 left
    if ((event.keyCode == 68 || event.keyCode == 39) && direction != 'left') direction = 'right' // 68 right
    if ((event.keyCode == 83 || event.keyCode == 40) && direction != 'up') direction = 'down' // 83 down
    if ((event.keyCode == 87 || event.keyCode == 38) && direction != 'down') direction = 'up' // 87 up
}

function gameLoop() {
    if (snake[0].x > 15 * box && direction == 'right') snake[0].x = 0;
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 15 * box;
    if (snake[0].y > 15 * box && direction == 'down') snake[0].y = 0;
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 15 * box;

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
