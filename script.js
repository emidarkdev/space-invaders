const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const keys = {
    L: false,
    R: false,
    S: false
}

class Player {

    constructor() {
        this.velocity = {
            x: 0,
            y: 0
        };
        this.spaceShip = new Image();
        this.spaceShip.src = './images/spaceShip.png';
        this.w = 50;
        this.h = 50;
        this.position = {
            x: canvas.width / 2 - this.w / 2,
            y: canvas.height - 100
        };
        this.rotation = 0;
    }
    draw() {
        ctx.save();
        ctx.translate(this.position.x+this.w/2,this.position.y+this.h/2);
        ctx.rotate(this.rotation);
        ctx.translate(-this.position.x-this.w/2,-this.position.y-this.h/2);
        ctx.drawImage(this.spaceShip, this.position.x,this.position.y, this.w, this.h)
        ctx.restore();
    };
    update() {
        this.draw();
        this.position.x += this.velocity.x;
    }
}
let player = new Player();

const animation = () => {
    ctx.fillStyle = '#212121';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    player.update();

    requestAnimationFrame(animation);

    if (keys.L && player.position.x >= 0) {
        player.velocity.x = -5;
        player.rotation = -.15;
    } else if (keys.R && player.position.x + player.w <= canvas.width) {
        player.velocity.x = 5;
        player.rotation = .15;
    } else if (keys.S) {

    } else {
        player.velocity.x = 0;
    }
}
animation();

document.addEventListener('keydown', ({ key }) => {
    switch (key) {
        case 'ArrowRight':
            keys.R = true;
            keys.L = false;
            break;
        case 'ArrowLeft':
            keys.L = true;
            keys.R = false;
            break;
        case ' ':
            keys.S = true;
            break;
        default:
            break;
    }
});