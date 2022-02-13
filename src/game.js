const Entity = require("./entity");
const Levels = require("./levels");
const LevelBlocks = require("./level_blocks")
const Util = require("./scripts/util")

class Game {
    constructor(){
        this.objs_to_render = [];
        this.levels = Levels.allLevels();
        this.currLevel = 0;
        this.hidden = -1;
        this.fall = .05;
        this.j = 60;
        this.tickCount = 0
        this.ticking = true;
        this.faded = false;
        this.fadeIn = false;
        this.fadeamount = 0.05;
        this.levEnd = 1;
        this.win = 0;
    }

    static createPlayer(obj, x, y, w, h, ctx){//creates a new player object
        obj.player = new Entity(x, y, w, h, ctx);
        obj.objs_to_render.push(obj.player)
        obj.prevx = obj.player.x;
    }

    draw(ctx) {//overall renderloop
        ctx.clearRect(0, 0, canvas.width, canvas.height);
                this.levels[this.currLevel].concat(this.player).forEach((e) => {
            e.draw(ctx, this.hidden)
        })
        if (this.hidden === 1) {
            ctx.fillStyle = 'rgba(22,60,210,0.3)';
            ctx.fillRect(0, 0, 900, 506, 0.1)
            ctx.stroke();
        }
        if (((this.player.x > 800 && this.player.y > 200) && this.currLevel >= 2) || this.win === 1){
            this.onScreen(ctx, "WIN");
            this.win = 1;
            if (this.ticker(235)){
                return false;
            };
        }
        if (this.player.y > 1000 && this.win !== 1){
            this.onScreen(ctx, "DEAD");
            if (this.ticker(235)){
                return false;
            };
        }
        if (this.win !== 1) {
            this.player.y += 15;//gravity
            if ((this.player.x > 850 && this.currLevel < this.levels.length - 1) || (this.currLevel === 0 && this.player.x < 2)) {
                this.currLevel += 1;//this checks if the player ran off screen and takes them to previous or next level accordingly
                this.player.x = 0;
                this.player.y = 200;
                this.levEnd = -200;
                this.hidden = -1;
            } else if (this.player.x < 0 && this.currLevel !== 1) {
                this.currLevel -= 1;
                this.player.x = 5;
                this.player.y = 200;
                this.levEnd = -200;
                this.hidden = -1;
            }  
            if (this.player.jump === true){
                this.jump()
                this.player.jumpAnimation();
            } else {
                this.gravity();
            }
            if (this.win === 0){
                this.playerMove();
            }
        };

        return true;
    }

    playerMove() { //implements player move logic
        if (this.player.left) {
            this.player.runLeft();
            this.prevx = this.player.x;
            this.player.x -= 5;
        } else if (this.player.right) {
            this.player.runRight();
            this.prevx = this.player.x;
            this.player.x += 5;
        } else if (this.player.changePlane) {
            this.player.changePlaneAnimation();
        } else {
            this.player.standStill();
        }
    }

    onScreen(ctx, message){ //renders dead on screen
        ctx.fillStyle = "red";
        ctx.font = "300px Ariel";
        ctx.fillText(message, 30, 300);
    }

    ticker(max){ //utiltiy to wait a certain amount of time before completeing an action
        this.tickCount++;
        if (this.tickCount === max){
            return true;
        } else {
            return false;
        }
    }

    jump(){ //implements jump physics
        this.player.y -= this.j;
        this.j *= .75;
        this.j += .25;
        if (this.j < 4) {
            this.player.p = 1;
            this.j = 60;
            this.player.jump = false;
        }
    }

    gravity(){//filters through blocks and checks collision with those blocks
        let arr = this.levels[this.currLevel].filter(e => this.ishidden(e));
        arr.forEach((e) => {
            if (this.isCollisionFall(e)) {
                        this.player.y = e.y - 110;
                        this.fall = 1;
                    return;
            }
        })
    }

    ishidden(e){ //checks if a block is hidden
        if ((e.hidden === 0) || e.hidden === this.hidden ) {
            return true
        } else {
            return false
        }
    }

    isCollisionFall(obj){ //checks if a block is being collided with
        if (Util.between(obj.y - 109, obj.y, this.player.y)) {
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