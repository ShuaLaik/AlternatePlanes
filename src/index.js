const Game = require("./game");
const GameView = require("./game_view");
const Sound = require("./scripts/music");

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const sound = new Sound;
    const game = new Game;
    sound.playMusic();
    const gameview = new GameView(game, ctx);
    
    gameview.start();

    document.addEventListener('keydown', (event) => {
        
        const keyname = event.key;
        console.log(`Keydown => ${keyname}`);
        if (keyname === 'd' || keyname === 'D') {
            gameview.game.player.right = true;
        } else if (keyname === 'a' || keyname === 'A') {
            gameview.game.player.left = true;
        } else if (keyname === ' ') {
            gameview.game.player.jump = true;
        } else if (keyname === 'q' || keyname === 'Q') {
            gameview.game.hidden ? gameview.game.hidden = false : gameview.game.hidden = true;
            gameview.game.player.changePlane = true;
            gameview.game.player.p = 1;
        }
    })

    document.addEventListener('keyup', (event) => {
        const keyname = event.key;
        console.log(`Keyup => ${keyname}`);
        if (keyname === 'd' || keyname === 'D') {
            gameview.game.player.right = false;
            gameview.game.player.still = true;
            return;
        } else if (keyname === 'a' || keyname === 'A') {
            gameview.game.player.left = false;
            gameview.game.player.still = true;
            return;
        }
})


})


