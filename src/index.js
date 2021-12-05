import Entity from "./entity";


document.addEventListener("DOMContentLoaded", () => {
    
    const canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let x = 0;
    let xi = 200;
    var stop = true;
    var moving = true;
    var h;
    let image = new Image();
    image.src = `../imgs/Idle (1).png`;
    image.onload = function() {
        ctx.drawImage(image, xi, 200, 100, 100);
    }
    let standstill = function(){
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (moving === true){
            return;
        }
        x += 1;
        if (x > 10){
            x = 0;

        }
        console.log(x);
        image.src = `../imgs/Idle (${x}).png`;
        ctx.drawImage(image, xi, 200, 100, 100);
        window.requestAnimationFrame(standstill)
    }

    let right = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        if (stop === true) {
            return;
        }
        // setTimeout(() => {

            // setTimeout(200);
            x += 1;
            if (x > 8) {
                x = 1;

            }
            xi += 5;
            console.log(x);
            image.src = `../imgs/Run (${x}).png`;
            // image.translate(width, 0)
            ctx.drawImage(image, xi, 200, 100, 100);
            // ctx.restore(h);
            window.requestAnimationFrame(right)
        // }, 1000);
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
        xi -= 5;
        console.log(x);
        image.src = `../imgs/Run (${x}).png`;
        // image.scale(1, -1);
        ctx.drawImage(image, xi, 200, 100, 100);
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
        if (keyname === 'd') {
            stop = false;
            h = window.requestAnimationFrame(right);
        } else if (keyname === 'a'){
            stop = false;
            h = window.requestAnimationFrame(left);
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


