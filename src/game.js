const Entity = require("./entity");

class Game {
    constructor(){
        this.objs_to_render = [];
        this.objs_to_hide = [];
    }

    static createPlayer(obj, x, y, w, h, ctx){
        obj.player = new Entity(x, y, w, h, ctx);
        obj.objs_to_render.push(obj.player)
    }

    draw(ctx) {
            this.objs_to_render.forEach((e) => {
                ctx.drawImage(e.image, e.x, e.y, e.q, e.w);
            })
    }


}



module.exports = Game;