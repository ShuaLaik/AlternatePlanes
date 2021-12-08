const StillBlock = require("./level_blocks")
const Game = require('./game');
const Entity = require("./entity")

class GameView {
    constructor(game, ctx){
        this.ctx = ctx;
        this.game = game;
        Game.createPlayer(this.game, 300, 100, 115, 115, this.ctx);
    }

    start(){
        this.time = 0;
        this.render();
    }

    render(){
        if (!this.game.draw(this.ctx)){
            this.game = new Game;
            Game.createPlayer(this.game, 300, 200, 115, 115, this.ctx);
        };
        window.requestAnimationFrame(this.render.bind(this));
    }
}



module.exports = GameView;