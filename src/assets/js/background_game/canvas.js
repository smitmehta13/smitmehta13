const HEIGHT = 450;
const WIDTH = 750;

class Canvas {
    constructor() {
        this.height = HEIGHT;
        this.width = WIDTH;
        this.ctx = document.getElementById("game-canvas").getContext("2d");
    }

    static dimensions() {
        return { width: WIDTH, height: HEIGHT };
    }

    draw(game) {
        // Clear canvas
        this.ctx.clearRect(0, 0, Canvas.dimensions().width, Canvas.dimensions().height);

        // Draw player (p4)
        this.ctx.drawImage(game.p4.sprite, game.p4.x, game.p4.y);

        // Draw chest
        this.ctx.drawImage(game.gold.sprite, game.gold.x, game.gold.y);

        // Draw enemies
        // game.enemies.forEach((elem) => {
        //     this.ctx.fillStyle = elem.color;
        //     this.ctx.fillRect(elem.x, elem.y, elem.width, elem.height);
        // })

        // this.ctx.fillText("Best: " + p4.best + " Oz", 70, 20);
        if (!game.gameLive) {

            // this.ctx.textAlign = "center";

            // // Display total gold
            // this.ctx.font = "50px Verdana";
            // this.ctx.fillStyle = "rgb(215,215,0)";
            // this.ctx.fillText("Total Gold: " + game.p4.score + " Oz", Canvas.dimensions().width / 2, Canvas.dimensions().height / 2 - 20);

            // // Display play again
            // this.ctx.font = "20px Verdana";
            // this.ctx.fillText("Press space to play again", Canvas.dimensions().width / 2, Canvas.dimensions().height / 2 + 20);
        }
    }


}

export { Canvas };