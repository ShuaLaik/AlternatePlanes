const Entity = require("./entity");
const Levels = require("./levels");
const LevelBlocks = require("./level_blocks")
const Util = require("./scripts/util")

class Game {
    constructor(){
        this.objs_to_render = [];
        this.levels = Levels.allLevels();
        this.currLevel = 0;
        this.hidden = false;
        this.fall = .05;
        this.j = 60;
        this.faded = false;
        this.fadeIn = false;
        this.fadeamount = 0.05;
        this.levEnd = 1;
    }

    static createPlayer(obj, x, y, w, h, ctx){
        obj.player = new Entity(x, y, w, h, ctx);
        obj.objs_to_render.push(obj.player)
        obj.prevx = obj.player.x;
    }

    draw(ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.player.y += 15;
        if ((this.player.x > 900 && this.currLevel < this.levels.length - 1) || (this.currLevel === 0 && this.player.x < 0)) {
            this.currLevel += 1;
            this.player.x = 0;
            this.player.y = 200;
            this.levEnd = -200;
            this.hidden = false;
        } else if (this.player.x < 0 && this.currLevel !== 1) {
            this.currLevel -= 1;
            this.player.x = 5;
            this.player.y = 200;
            this.levEnd = -200;
            this.hidden = false;
        }  
        if (this.player.jump === true){
            this.jump()
            this.player.jumpAnimation();
        } else {
            this.gravity();
        }
        this.playerMove();
        this.levels[this.currLevel].concat(this.player).forEach((e) => {
            e.draw(ctx, this.hidden)
        })
        if (this.hidden === true) {
            ctx.fillStyle = 'rgba(22,60,210,0.1)';
            ctx.fillRect(0, 0, 900, 506, 0.1)
            ctx.stroke();
        }
    }

    playerMove() {
        if (this.player.left) {
            this.player.runLeft();
            this.prevx = this.player.x;
            this.player.x -= 5;
        } else if (this.player.right) {
            this.player.runRight();
            this.prevx = this.player.x;
            this.player.x += 5;
        } else if (this.player.changePlane) {
            console.log(true);
            this.player.changePlaneAnimation();
        } else {
            this.player.standStill();
        }
    }

    jump(){
        this.player.y -= this.j;
        this.j *= .75;
        this.j += .25;
        if (this.j < 4) {
            this.player.p = 1;
            this.j = 60;
            this.player.jump = false;
        }
    }

    gravity(){
        let arr = this.levels[this.currLevel].filter(e => (e.hidden !== true || this.hidden === true) && e.y > this.player.y);
        arr.forEach((e) => {
            if (this.isCollisionFall(e)) {
                        this.player.y = e.y - 110;
                        this.fall = 1;
                    return;
            } else {
            //     this.player.y += this.fall;
            //     this.fall *= 1;
            //     if (this.player.y > 450) {
            //             this.player.x -= 60;
            //             this.player.y -= 400;
            //     }
            //     console.log(this.player.y)
            }
        })
    }

    isCollisionFall(obj){

        if (this.player.y > obj.y - 109) {
            if (Util.between(obj.x - 60, obj.x + 20, this.player.x )) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }


}



module.exports = Game;