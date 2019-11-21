const canvas = document.querySelector('canvas');
const Up = document.querySelector('#Up');
const Down = document.querySelector('#Down');
const Left = document.querySelector('#Left');
const Right = document.querySelector('#Right');
const c = canvas.getContext('2d');
const scale = 20;


canvas.height = 500;
canvas.width = 500;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

function makeFruit() {
    function getRandomPos(arr, checkX) {
        let rand = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        if (
            arguments.length > 0 
            && arr.filter((cell) => cell.x).includes(checkX) 
            && arr.filter((cell) => cell.y).includes(rand)
        ) {
            rand = getRandomPos(arr, checkX);
            return rand;
        }
        return rand;
    }

    let x, y;
    function setFruitLocation() {
        x = getRandomPos();
        y = getRandomPos(Snake.body, x);
        this.pos = {x, y};
    }

    function drawFruit() {
        c.fillStyle = '#c92424';
        c.fillRect(x, y, scale, scale);
    }

    return {
        setFruitLocation,
        drawFruit,
        pos: {x, y},
    };
}

function makeSnake() {
    let head = {
        x: 200,
        y: 200,
    }
    let body = [];

    function makeCell(x, y) {
        return {x, y};
    }

    for(let i = 0; i < 3; i++) {
        body.push(makeCell(head.x - (scale * (i + 1)), head.y));
    }
    
    let xDir = 1 * scale;
    let yDir = 0;
    
    function drawSnake() {
        c.fillStyle = '#13ba2c';
        c.fillRect(head.x, head.y, scale, scale);
        body.forEach((cell) => {
            c.fillRect(cell.x, cell.y, scale, scale);
        });
    }
    
    function update() {
        temp1 = {
            x: head.x,
            y: head.y,
        };
        temp2 = {
            x: null,
            y: null,
        };
        head.x += xDir;
        head.y += yDir;
        body.forEach((cell) => {
            temp2.x = cell.x;
            temp2.y = cell.y;
            cell.x = temp1.x;
            cell.y = temp1.y;
            temp1.x = temp2.x;
            temp1.y = temp2.y;
        });
        if(head.x > canvas.width)
            head.x = 0;
        if(head.y > canvas.height)
            head.y = 0;
        if(head.x < 0 - scale)
            head.x = canvas.width;
        if(head.y < 0 - scale)
            head.y = canvas.height;
        this.body = [head, ...body];
    }
    
    function changeDirection(direction) {
        if(head.x < 0 || head.x == canvas.width || head.y < 0 || head.y == canvas.height) {
            setTimeout(() => {
                changeDirection(direction);
            }, 1);
            return;
        }
        switch(direction) {
            case 'Up':
                if(yDir != 1 * scale) {
                    xDir = 0;
                    yDir = -1 * scale;
                }
                break;
            case 'Down':
                if(yDir != -1 * scale) {
                    xDir = 0;
                    yDir = 1 * scale;
                }
                break;
            case 'Left':
                if(xDir != 1 * scale) {
                    yDir = 0;
                    xDir = -1 * scale;
                }
                break;
            case 'Right':
                if(xDir != -1 * scale) {
                    yDir = 0;
                    xDir = 1 * scale;
                }
                break;
        }
    }

    function eating() {
        if(head.x == Fruit.pos.x && head.y == Fruit.pos.y) {
            body.splice(0, 0, makeCell(head.x, head.y));
            head.x += xDir;
            head.y += yDir;
            this.body = [head, ...body];
            Fruit.setFruitLocation();
        }
    }

    function collide(interval) {
        for(let i = 0; i < body.length; i++) {
            if(body[i].x == head.x && body[i].y == head.y) {
                clearInterval(interval);
            }
        }
    }

    return {
        drawSnake,
        update,
        changeDirection,
        eating,
        collide,
        body: [head, ...body],
    };
}

const Snake = makeSnake();
const Fruit = makeFruit();

(function game() {
    Fruit.setFruitLocation();
    const interval = setInterval(() => {
        c.clearRect(0, 0, canvas.width, canvas.height);
        Fruit.drawFruit();
        Snake.drawSnake();
        Snake.update();
        Snake.eating();
        Snake.collide(interval);
    }, 120);
    let fired = false;
    function handleKeyDown(e) {
        if(fired) {
            setTimeout(() => {
                handleKeyDown(e);
            }, 1);
            return;
        };
        fired = true;
        Snake.changeDirection(e.key.replace('Arrow', ''));
        setTimeout(() => {
            fired = false;
        }, 120);
    }
    function handleClick(e) {
        if(fired) {
            setTimeout(() => {
                handleClick(e);
            }, 1);
            return;
        };
        fired = true;
        Snake.changeDirection(e.target.id);
        setTimeout(() => {
            fired = false;
        }, 120);
    }
    window.addEventListener('keydown', handleKeyDown);
    Up.addEventListener('click', handleClick);
    Down.addEventListener('click', handleClick);
    Left.addEventListener('click', handleClick);
    Right.addEventListener('click', handleClick);
}());
