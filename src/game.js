const Entity = require("./entity");
const Levels = require("./levels");
const LevelBlocks = require("./level_blocks")

class Game {
    constructor(){
        this.objs_to_render = [];
        this.level = new Levels();
        this.level = this.level.lev()
        this.hidden = false;
        this.fall = .05;
        // console.log(this.level.lev());
        // this.objs_to_render.concat(this.level.lev());
        
    }

    static createPlayer(obj, x, y, w, h, ctx){
        obj.player = new Entity(x, y, w, h, ctx);
        obj.objs_to_render.push(obj.player)
    }

    draw(ctx) {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.gravity();
        this.objs_to_render.forEach((e) => {
            e.draw(ctx)
        })
        this.level.forEach((e) => {
            e.draw(ctx, this.hidden)
        })
        if (this.hidden === true) {
            ctx.fillStyle = 'rgba(22,60,210,0.5)';
            ctx.fillRect(0, 0, 900, 506, 0.1)
            ctx.stroke();
        }
    }

    gravity(){
        let arr = this.level.filter(e => (e.hidden !== true || this.hidden === false) && e.y > this.player.y);
        arr.forEach((e) => {
            if (this.isCollision(e)) {
                    this.player.y = e.y - 110;
                    this.fall = 1;
                    return;

            } else {
                this.player.y += this.fall;
                this.fall *= 1.01;
                if (this.player.y > 450) {
                    setTimeout(() => {
                        this.player.x -= 60;
                        this.player.y -= 200;
                    }, );
                }

            }
        })
    }

    isCollision(obj){

        if (this.player.y > obj.y - 109) {
            if (this.player.x > obj.x -60 && this.player.x < obj.x + 20) {
                console.log(obj);
                console.log(this.player.x)
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