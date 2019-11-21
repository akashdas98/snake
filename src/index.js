const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const scale = 20;

canvas.height = 500;
canvas.width = 500;

function makeSnake() {
    let x = 0;
    let y = 0;
    let xSpeed = 1;
    let ySpeed = 0;
    
    function draw() {
        c.fillStyle = '#13ba2c';
        c.fillRect(x, y, scale, scale);
    }
    function update() {
        x += xSpeed;
        y += ySpeed;
        if(x > canvas.width)
            x = 0;
        if(y > canvas.height)
            y = 0;
        if(x < 0 - scale)
            x = canvas.width;
        if(y < 0 - scale)
            y = canvas.height;
    }
    function changeDirection(direction) {
        if(x % scale != 0 || y % scale != 0) {
            setTimeout(() => {
                changeDirection(direction);
            }, 10);
            
            return;
        }
        if(x < 0 || x == canvas.width || y < 0 || y == canvas.height) return;
        switch(direction) {
            case 'Up':
                xSpeed = 0;
                ySpeed = -1;
                break;
            case 'Down':
                xSpeed = 0;
                ySpeed = 1;
                break;
            case 'Left':
                ySpeed = 0;
                xSpeed = -1;
                break;
            case 'Right':
                ySpeed = 0;
                xSpeed = 1;
                break;
        }
    }

    return {
        draw,
        update,
        changeDirection,
    };
}

const Snake = makeSnake();

(function game() {
    window.setInterval(() => {
        c.clearRect(0, 0, canvas.width, canvas.height);
        Snake.draw();
        Snake.update();
    }, 10);
    window.addEventListener('keydown', (e) => {
        Snake.changeDirection(e.key.replace('Arrow', ''));
    });
}());
