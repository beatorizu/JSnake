let canvas = document.getElementById("board");
let ctx = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = 'right';
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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

function createFood() {
    ctx.fillStyle = "purple";
    ctx.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {
    if (KEY.LEFT.includes(event.keyCode) && direction != 'right') direction = 'left'
    if (KEY.RIGHT.includes(event.keyCode) && direction != 'left') direction = 'right'
    if (KEY.DOWN.includes(event.keyCode) && direction != 'up') direction = 'down'
    if (KEY.UP.includes(event.keyCode) && direction != 'down') direction = 'up'
}

function gameLoop() {
    if (snake[0].x > 15 * box) snake[0].x = 0;
    if (snake[0].x < 0) snake[0].x = 15 * box;
    if (snake[0].y > 15 * box) snake[0].y = 0;
    if (snake[0].y < 0) snake[0].y = 15 * box;

    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(game);
            alert('Tururu... T_T')
        }
    }

    createBackground();
    createSnake();
    createFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == 'right') snakeX += box;
    if (direction == 'left') snakeX -= box;
    if (direction == 'down') snakeY += box;
    if (direction == 'up') snakeY -= box;

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let game = setInterval(gameLoop, 100);
