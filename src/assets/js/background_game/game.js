import { Enemy, Gold, P4 } from "./entities.js";
import { Canvas } from "./canvas.js";
// import { Random } from "./random.js";
import { Bot } from "./bot.js"


class Game {
	constructor() {
		this.gameLive = false;
		this.p4 = new P4();
		this.bot = new Bot()
		this.enemies = [new Enemy()];
		this.gold = new Gold();
		this.canvas = new Canvas();
	}


	restart = () => {
		this.p4.score = 0;
		this.p4.x = this.p4.xinit;
		this.p4.y = this.p4.yinit;
		this.gold.x = this.gold.xinit;
		this.gold.y = this.gold.yinit;
		// this.enemies = [new Enemy()];
		this.gameLive = true;
		this.step();
	}

	update() {
		this.p4.updateCoordinates();
		this.p4.checkBounds();
		if (this.p4.checkCollision(this.gold)) {
			this.gold.randomSpawn();
			this.p4.score += 10;
			// this.enemies.push(new Enemy());
		}

		// Update rectangles
		// this.enemies.forEach((elem) => {

		// 	if (this.p4.checkCollision(elem)) {
		// 		this.gameLive = false
		// 		setTimeout(() => this.restart(), 200)

		// 	}

		// 	elem.y += elem.yspeed;
		// 	elem.x += elem.xspeed;




		// 	// this.bot.checkDanger(this.p4, elem)


		// 	if (elem.y + elem.height >= this.canvas.height - 3 || elem.y <= 5) {
		// 		elem.yspeed = -elem.yspeed;
		// 		elem.color = Random.getColor();
		// 	}
		// 	if (elem.x + elem.width >= this.canvas.width - 3 || elem.x <= 5) {
		// 		elem.xspeed = -elem.xspeed;
		// 		elem.color = Random.getColor();
		// 	}
		// });

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
		window.addEventListener("load", () => {
			this.gameLive = true

			this.update()
			this.step();
		});
	}
}

export default Game;
