const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const game = new Game;
    const gameview = new GameView(game, ctx);
    gameview.start();

    document.addEventListener('keydown', (event) => {
        
        const keyname = event.key;
        if (keyname === 'd') {
            gameview.game.player.right = true;
        } else if (keyname === 'a') {
            gameview.game.player.left = true;
        } else if (keyname === ' ') {
            gameview.game.player.jump = true;
        } else if (keyname === 'q') {
            gameview.game.hidden ? gameview.game.hidden = false : gameview.game.hidden = true;
        }
    })

    document.addEventListener('keyup', (event) => {
        const keyname = event.key;
        if (keyname === 'd') {
            gameview.game.player.right = false;
            gameview.game.player.still = true;
            return;
        } else if (keyname === 'a') {
            gameview.game.player.left = false;
            gameview.game.player.still = true;
            return;
        }
})


})


