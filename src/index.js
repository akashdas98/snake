import makeFruit from './fruit';
import makeSnake from './snake';
import {c, canvas} from './canvas';

const Up = document.querySelector('#Up');
const Down = document.querySelector('#Down');
const Left = document.querySelector('#Left');
const Right = document.querySelector('#Right');

const Snake = makeSnake();
const Fruit = makeFruit();

(function game() {
    Fruit.setFruitLocation(Snake.body);
    const interval = setInterval(() => {
        c.clearRect(0, 0, canvas.width, canvas.height);
        Fruit.drawFruit();
        Snake.drawSnake();
        Snake.update();
        Snake.eating(Fruit);
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
