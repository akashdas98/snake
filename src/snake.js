import {canvas, c, scale} from './canvas';

function makeSnake() {
    let head = {
        x: 200,
        y: 200,
    }
    let body = [];
    let length = 3;
    let xDir = 1 * scale;
    let yDir = 0;

    function makeCell(x, y) {
        return {x, y};
    }
    for(let i = 0; i < length; i++) {
        body.push(makeCell(head.x + (xDir * (i + 1)), head.y + (yDir * (i + 1))));
    }
    
    function drawSnake() {
        c.fillStyle = '#13ba2c';
        body.forEach((cell) => {
            c.fillRect(cell.x, cell.y, scale, scale);
        });
        c.fillRect(head.x, head.y, scale, scale);
    }
    
    function update() {
        for(let i = 0; i < body.length - 1; i++) {
            body[i] = body[i+1];
        }
        body[length - 1] = {x: head.x, y: head.y};
        
        head.x += xDir;
        head.y += yDir;
        
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

    function eating(Fruit) {
        if(head.x == Fruit.pos.x && head.y == Fruit.pos.y) {
            length++;
            Fruit.setFruitLocation(this.body);
        }
    }

    function collide(interval) {
        body.forEach((cell) => {
            if(cell.x == head.x && cell.y == head.y) {
                clearInterval(interval);
            }
        });
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

export default makeSnake;