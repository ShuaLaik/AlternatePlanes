
document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById('canvas');
    // canvas.height = "506";
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(100, 450, 50, 0, 2 * Math.PI);
    ctx.stroke();

})


