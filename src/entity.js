class Entity {
    constructor(x, y, w, h, ctx) {
        this.p = 1;
        this.ctx = ctx;
        this.x = x;
        this.w = w;
        this.h = h;
        this.y = y;
        this.left = false;
        this.right = false;
        this.jump = false;
        this.changePlane = false;
        this.image = new Image();
        this.image.src = `../imgs/Idle (${this.p}).png`;
    }

    draw(ctx) {
        this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    runRight(){
        this.p += 1;
        if (this.p > 8) {
            this.p = 1;
        }
        this.image.src = `../imgs/Run (${this.p}).png`;
    }

    standStill(){
        this.p += 1;
        if (this.p > 10) {
            this.p = 1;
        }
        this.image.src = `../imgs/Idle (${this.p}).png`;
        
    }

    runLeft(){
        this.p += 1;
        if (this.p > 8) {
            this.p = 1;
        }
        this.image.src = `../imgs/Run (${this.p})l.png`;
    }

    jumpAnimation(){
        this.p += 1;
        if (this.p > 10) {
            this.p = 1;
        }
        this.image.src = `../imgs/Jump (${this.p}).png`;
    }

    changePlaneAnimation(){
        this.p += 1;
        if (this.p > 7){
            this.p = 1;
            this.changePlane = false;
        }
        console.log(this.p);
        this.image.src = `../imgs/Melee (${this.p}).png`;
    }
}



module.exports = Entity;