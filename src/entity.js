class Entity {
    constructor(x, y, w, q, ctx) {
        this.p = 1;
        this.ctx = ctx;
        this.x = x;
        this.w = w;
        this.q = q;
        this.y = y;
        this.stop = true;
        this.moving = true;
        this.h;
        this.currjump = 400;
        this.image = new Image();
        this.image.src = `../imgs/Idle (1).png`;
    }

    draw(ctx) {
        this.image.onload = function () {
            this.ctx.drawImage(this.image, this.x, this.y, 115, 115);
        }

        
    }
//     standstill = function () {
//     // this.ctx.clearRect(0, 0, canvas.width, canvas.height);
//     if (moving === true) {
//         return;
//     }
//     this.p = 1;
//     this.p += 1;
//     if (this.p > 10) {
//         this.p = 1;

//     }
//     console.log(this.p);
//     this.image.src = `../imgs/Idle (${this.p}).png`;
//     this.ctx.drawImage(this.image, this.x, this.y, 115, 115);
//     window.requestAnimationFrame(standstill)
// }

//     right = function () {
//         this.ctx.clearRect(0, 0, canvas.width, canvas.height)
//         if (stop === true) {
//             return;
//         }
//         this.p = 1;
//         this.p += 1;
//         if (this.p > 8) {
//             this.p = 1;

//         }
//         if (!(xi + 5 > canvas.width - 50)) {
//             xi += 5;
//         }
//         this.image.src = `../imgs/Run (${this.p}).png`;
//         this.ctx.drawImage(this.image, this.x, this.y, 115, 115);
//         window.requestAnimationFrame(right)
//     }

    // jump = function () {
    //     setTimeout(() => {
    //         this.y = this.y - this.currjump;
    //         this.y *= .99;
    //         this.y += .25;
    //         this.currjump -= 4;
    //         if (this.y >= 400) {
    //             this.y = 400;
    //             this.currjump = 40;
    //             return;
    //         } else {
    //             console.log("jumping!")
    //             this.jump()
    //         }
    //     }, 1000);
    //     // this.p += 1;
    //     // if (this.p > 10) {
    //     //     this.p = 10;
    //     // }
    //     // this.image.src = `../imgs/Jump (${this.p}).png`;
    //     // this.ctx.drawImage(this.image, this.x, this.y, 115, 115);
    // }



//     left = function () {
//         this.ctx.clearRect(0, 0, canvas.width, canvas.height)
//         if (stop === true) {
//             return;
//         }
//         this.p += 1;
//         if (this.p > 8) {
//             this.p = 1;

//         }
//         if (!(xi - 5 < -50)) {
//             xi -= 5;
//         }
//         console.log(this.p);
//         this.image.src = `../imgs/Run (${this.p})l.png`;
//         this.ctx.drawImage(this.image, this.x, this.y, 115, 115);
//         window.requestAnimationFrame(left)
//     }

    
}



module.exports = Entity;