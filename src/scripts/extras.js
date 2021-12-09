class Fade {
    constructor(){
        this.fadeAmount = 0.05;
    }

    draw(ctx){
        if (this.faded === true) {
            this.fadeout();
            ctx.fillStyle = `rgba(0,0,0,${this.fadeamount})`;
            ctx.fillRect(0, 0, 900, 506, 0.05)
            ctx.stroke();
        }
    }

    fadein(){

    }

    fadeout(){

    }
}