import Entity from "./entity";


document.addEventListener("DOMContentLoaded", () => {
    
    const canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let x = 0;
    let xi = 200;
    let xy = 400;
    let stance = 'r';
    var stop = true;
    var moving = true;
    var h;
    var currjump = 40;
    var gravity = 90;
    let image = new Image();
    image.src = `../imgs/Idle (1).png`;
    image.onload = function() {
        ctx.drawImage(image, xi, xy, 115, 115);
    }
    let standstill = function(){
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (moving === true){
            return;
        }
        x += 1;
        if (x > 10){
            x = 1;

        }
        console.log(x);
        image.src = `../imgs/Idle (${x}).png`;
        ctx.drawImage(image, xi, xy, 115, 115);
        window.requestAnimationFrame(standstill)
    }

    let right = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        if (stop === true) {
            return;
        }
            x += 1;
            if (x > 8) {
                x = 1;

            }
            if (!(xi + 5 > canvas.width - 50)){
                xi += 5;
            }
            image.src = `../imgs/Run (${x}).png`;
            ctx.drawImage(image, xi, xy, 115, 115);
            window.requestAnimationFrame(right)
    }

    let jump = function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        xy = xy - currjump;
        xy *= .99;
        xy += .25;
        currjump -= 4;
        console.log(xy);
        if (xy >= 400) {
            xy = 400;
            currjump = 40;
            window.cancelAnimationFrame(h);
            return;
        }
        x += 1;
        if (x > 10) {
            x = 10;
        }
        image.src = `../imgs/Jump (${x}).png`;
        ctx.drawImage(image, xi, xy, 115, 115);
        window.requestAnimationFrame(jump);
    }



    let left = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        if (stop === true) {
            return;
        }
        x += 1;
        if (x > 8) {
            x = 1;

        }
        if (!(xi - 5 < -50)){
            xi -= 5;
        }
        console.log(x);
        image.src = `../imgs/Run (${x})l.png`;
        ctx.drawImage(image, xi, xy, 115, 115);
        window.requestAnimationFrame(left)
    }

  

    var done = false;
    // ; (function () {
    //     window.main = function () {
    //         if (done) {
    //             window.requestAnimationFrame(main);
    //         }
    //     }
    //     main()
    // })();

    document.addEventListener('keydown', (event) => {
        const keyname = event.key;
        console.log(keyname);
        if (keyname === 'd') {
            stance = 'r'
            window.cancelAnimationFrame(h);
            stop = false;
            h = window.requestAnimationFrame(right);
        } else if (keyname === 'a'){
            stance = 'l'
            window.cancelAnimationFrame(h);
            stop = false;
            h = window.requestAnimationFrame(left);
        } else if (keyname === ' ') {
            window.cancelAnimationFrame(h);
            h = window.requestAnimationFrame(jump);
        }
    })

    document.addEventListener('keyup', (event) => {
        const keyname = event.key;
        if (keyname === 'd') {
            stop = true;
            h = cancelAnimationFrame(h);
            moving = false;
            h = window.requestAnimationFrame(standstill);
            return;
        } else if (keyname === 'a') {
            stop = true;
            h = cancelAnimationFrame(h);
            moving = false;
            h = window.requestAnimationFrame(standstill);
            return;
        }
    }) 
})


