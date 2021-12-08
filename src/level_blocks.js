class StillBlock {
    constructor(x, y, w, h, type, hidden=false, tele=false) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.hidden = hidden;
        this.image = new Image();
        this.image.src = `./imgs/Tileset/${type}.png`;
        this.tele = tele;
        if (tele === true) {
            this.image.src = "";
        }
    }

    draw(ctx, hide) {
        if (hide !== this.hidden && this.hidden !== 0){
            return;
        } else {
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        }
    }
}




module.exports = StillBlock;