import { Random } from "./random.js";
import { Canvas } from "./canvas.js";
import GOLD_IMG from "../../images/gold.png"
import P4_IMG from "../../images/hero-face.png";

class Entities {
    constructor(height, width, x, y, xspeed, yspeed) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    }

    randomSpawn() {
        this.x = Random.getX(this.width);
        this.y = Random.getY(this.height);
    }

    check_x_coordinate(ent2) {
        return this.x + this.width > ent2.x && this.x < ent2.x + ent2.width
    }

    check_y_coordinate(ent2) {
        return this.y + this.height > ent2.y && this.y < ent2.y + ent2.height;
    }

    checkCollision(ent2) {
        return this.check_x_coordinate(ent2) && this.check_y_coordinate(ent2)
    }
}

class Enemy extends Entities {
    constructor() {
        const flag = Random.getBoolean()
        super(
            15, 10,
            Random.getX(10),
            Random.getY(15),
            flag ? Random.getSpeed() : 0,
            !flag ? Random.getSpeed() : 0
        )
        this.color = Random.getColor()
    }
}

class P4 extends Entities {
    constructor() {
        super(
            15, 25,
            325, (Canvas.dimensions().height / 2),
            4, 4
        )
        this.score = 0;
        this.sprite = new Image();
        this.sprite.src = P4_IMG;
        this.xinit = 10;
        this.yinit = Canvas.dimensions().height / 2;
        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.isMovingUp = false;
        this.isMovingDown = false;


    }

    move = (instruction) => {
        if (instruction === "up") {
            this.isMovingUp = true
        }
        if (instruction === "down") {
            this.isMovingDown = true
        }
        if (instruction === "left") {
            this.isMovingLeft = true

        }
        if (instruction === "right") {
            this.isMovingRight = true
        }
    }

    updateCoordinates() {
        if (this.isMovingRight) {
            this.x += this.xspeed;
        }
        if (this.isMovingLeft) {
            this.x -= this.xspeed;
        }
        if (this.isMovingUp) {
            this.y -= this.yspeed;
        }
        if (this.isMovingDown) {
            this.y += this.yspeed;
        }
    }

    checkBounds() {
        if (this.x + this.width > Canvas.dimensions().width) {
            this.x -= this.xspeed;
        }
        if (this.x < 0) {
            this.x += this.xspeed;
        }

        if (this.y + this.height > Canvas.dimensions().height) {
            this.y -= this.yspeed;
        }
        if (this.y < 0) {
            this.y += this.yspeed;
        }
    }
}

class Gold extends Entities {
    constructor() {
        super(
            18, 40,
            Canvas.dimensions().width - 46,
            (Canvas.dimensions().height / 2) - 15 / 4,
            0, 0
        )
        this.xinit = Canvas.dimensions().width - 46;
        this.yinit = (Canvas.dimensions().height / 2) - 15 / 4;
        this.sprite = new Image();
        this.sprite.src = GOLD_IMG;
    }
}

export { Enemy, P4, Gold };