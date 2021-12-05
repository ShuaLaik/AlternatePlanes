class Entity {
    constructor(ctx){
        x: 400;
        y: 450;
        w: 50;
        h: 50;
        vx: 10;
        sx: 10;
        vy: 0;
        sy: 0;
        color: 'red';
        ctx: ctx;
        draw: () => {
            
        }
    }

    
}

// const char = new Entity();
// document.addEventListener("keypress", (e) => {
//     console.log(e.charCode);
//     if (e.charCode === 97) {
//         ref = window.requestAnimationFrame(char.left());
//     }

// })

// document.addEventListener("keyup", () => {


// })

export default Entity;