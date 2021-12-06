class StillBlock {
    constructor(x, y, w, h, type, hidden=false) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.hidden = hidden;
        this.image = new Image();
        this.image.src = `./imgs/Tileset/${type}.png`;
    }

    draw(ctx, hide) {
        if (hide && this.hidden) {
            return;
        } else {
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        }
    }
}




module.exports = StillBlock;