import { Gold, P4 } from "./entities.js";
import { Random } from "./random.js";
import { Canvas } from "./canvas.js";
import { Bot } from "./bot.js"


class Game {
	constructor() {
		this.gameLive = false;
		this.p4 = new P4();
		this.bot = new Bot()
		this.gold = new Gold();
		this.canvas = new Canvas();
	}


	restart = () => {
		this.p4.x = this.p4.xinit;
		this.p4.y = this.p4.yinit;
		this.gold.x = this.gold.xinit;
		this.gold.y = this.gold.yinit;
		this.gameLive = true;
		this.step();
	}

	update() {
		this.p4.updateCoordinates();
		this.p4.checkBounds();
		if (this.p4.checkCollision(this.gold)) {
			this.p4.color = Random.getColor();
			this.gold.randomSpawn();
		}

		this.bot.instruction(this.p4, this.gold)

	}

	step = () => {
		this.update();
		this.canvas.draw(this);

		if (this.gameLive) {
			window.requestAnimationFrame(this.step);
		}
	}

	run() {
		this.gameLive = true
		this.update()
		this.step();
	}
}

export default Game;
