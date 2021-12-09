const StillBlock = require("./level_blocks")
const Game = require('./game');
const Entity = require("./entity")

class GameView {
    constructor(game, ctx){
        this.ctx = ctx;
        this.game = game;
        Game.createPlayer(this.game, 300, 100, 115, 115, this.ctx);
    }

    start(){ //starts the game
        this.time = 0;
        this.render();
    }

    render(){ //runs the main game loop
        if (!this.game.draw(this.ctx)){ //renders the game and checks for game over event - resets game if neccesary
            this.game = new Game;
            Game.createPlayer(this.game, 300, 200, 115, 115, this.ctx);
        };
        window.requestAnimationFrame(this.render.bind(this));
    }
}



module.exports = GameView;