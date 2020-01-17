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
        this.ctx.fillStyle = 'transparent'
        this.ctx.drawImage(game.gold.sprite, game.gold.x, game.gold.y);
    }


}

export { Canvas };