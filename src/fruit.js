import {c, scale, rows} from './canvas';

function makeFruit() {
    function getRandomPos(arr, checkX) {
        let rand = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        if (arguments.length > 0) {
            let match = false;
            for(let i = 0; i < arr.length; i++) {
                if(arr[i].x == checkX && arr[i].y == rand) {
                    match = true;
                    break;
                }
            }
            if(match) {
                rand = getRandomPos(arr, checkX);
                return rand;
            }
        }
        return rand;
    }

    let x, y;
    
    function setFruitLocation(body) {
        x = getRandomPos();
        y = getRandomPos(body, x);
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

export default makeFruit;