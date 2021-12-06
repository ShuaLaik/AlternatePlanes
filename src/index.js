// const Entity = require("./entity");
// const Game = require("./game");
// const GameView = require("./game_view");
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
            
            gameview.game.player.runRight();
            gameview.game.player.x += 25;
        } else if (keyname === 'a') {
            gameview.game.player.x -= 25;
            gameview.game.player.runLeft();
        } else if (keyname === ' ') {
            // gameview.game.player.jump();
            // window.cancelAnimationFrame(ent.h);
            // ent.h = window.requestAnimationFrame(ent.jump); 
        } else if (keyname === 'q') {
            gameview.game.hidden ? gameview.game.hidden = false : gameview.game.hidden = true;
        }
    })

    document.addEventListener('keyup', (event) => {
        const keyname = event.key;
        if (keyname === 'd') {
            gameview.game.player.still = true;
            gameview.game.player.standStill();
            // ent.stop = true;
            // ent.h = cancelAnimationFrame(ent.h);
            // ent.moving = false;
            // ent.h = window.requestAnimationFrame(ent.standstill);
            return;
        } else if (keyname === 'a') {
            gameview.game.player.still = true;
            gameview.game.player.standStill();
            // ent.stop = true;
            // ent.h = cancelAnimationFrame(ent.h);
            // ent.moving = false;
            // ent.h = window.requestAnimationFrame(ent.standstill);
            return;
        }
})


})

// document.addEventListener('keydown', (event) => {
//     const keyname = event.key;
//     console.log(keyname);
//     if (keyname === 'd') {
//         window.cancelAnimationFrame(ent.h);
//         ent.stop = false;
//         ent.h = window.requestAnimationFrame(ent.right);
//     } else if (keyname === 'a') {
//         window.cancelAnimationFrame(ent.h);
//         ent.stop = false;
//         ent.h = window.requestAnimationFrame(ent.left);
//     } else if (keyname === ' ') {
//         window.cancelAnimationFrame(ent.h);
//         ent.h = window.requestAnimationFrame(ent.jump);
//     }
// })

// document.addEventListener('keyup', (event) => {
//     const keyname = event.key;
//     if (keyname === 'd') {
//         ent.stop = true;
//         ent.h = cancelAnimationFrame(ent.h);
//         ent.moving = false;
//         ent.h = window.requestAnimationFrame(ent.standstill);
//         return;
//     } else if (keyname === 'a') {
//         ent.stop = true;
//         ent.h = cancelAnimationFrame(ent.h);
//         ent.moving = false;
//         ent.h = window.requestAnimationFrame(ent.standstill);
//         return;
//     }
// })



