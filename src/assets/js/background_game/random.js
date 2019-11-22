import { Canvas } from "./canvas.js";

const Random = {
	getX: function helper1(width) {
		return (Math.random() * (Canvas.dimensions().width - width - 10)) + 5;
	},
	getY: function helper2(height) {
		return (Math.random() * (Canvas.dimensions().height - height - 10)) + 5;
	},
	getBoolean: function helper3() {
		var luck = Math.random();
		if (luck === 0.5) {
			helper3();
		}
		return luck > 0.5;
	},
	getColor: function helper4() {
		var r = Math.random() * 255;
		var g = Math.random() * 255;
		var b = Math.random() * 255;

		var randomColor = "rgb(" + r + ", " + g + ", " + b + ")";

		return randomColor;
	},
	getSpeed: function helper5() {
		return (Math.random() * 5) + 3;
	}

}

export { Random };