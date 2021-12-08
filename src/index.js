const Game = require("./game");
const GameView = require("./game_view");
const Sound = require("./scripts/music");
const PopUp = require("./scripts/popup");

document.addEventListener("DOMContentLoaded", () => {
    const pop = new PopUp;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let musicPlaying = true;
    const sound = new Sound;
    const game = new Game;
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
            gameview.game.hidden === 1 ? gameview.game.hidden = -1 : gameview.game.hidden = 1;
            gameview.game.player.changePlane = true;
            gameview.game.player.p = 1;
        } else if (keyname === 'm' || keyname === 'M') {
            if (this.musicPlaying === false){
                sound.playMusic();
                this.musicPlaying = true;
            } else {
                this.musicPlaying = false;
                sound.stopMusic();
            }
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


