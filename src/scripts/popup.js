class PopUp {
    constructor() {
        this.section = document.getElementById('popup');
        this.l = document.createElement('section');
        this.r = document.createElement('section');
        this.l.id = "left";
        this.r.id = "right";
        this.section.append(this.l, this.r);
        this.hl = document.createElement('h3');
        this.hl.innerText = "Controls";
        this.l.appendChild(this.hl);
        this.ul = document.createElement('ul');
        this.l.append(this.ul);
        this.lone = document.createElement('li')
        this.loneh = document.createElement('h5');
        this.lonep = document.createElement('p');
        this.loneh.innerText = "A"
        this.lonep.innerText = " - Move Left"
        this.lone.append(this.loneh, this.lonep);
        this.ltwo = document.createElement('li')
        this.ltwoh = document.createElement('h5');
        this.ltwop = document.createElement('p');
        this.ltwoh.innerText = "D"
        this.ltwop.innerText = " - Move Right"
        this.ltwo.append(this.ltwoh, this.ltwop);
        this.lthree = document.createElement('li')
        this.lthreeh = document.createElement('h5');
        this.lthreep = document.createElement('p');
        this.lthreeh.innerText = "SpaceBar "
        this.lthreep.innerText = " - Jump"
        this.lthree.append(this.lthreeh, this.lthreep);
        this.lfour = document.createElement('li')
        this.lfourh = document.createElement('h5');
        this.lfourp = document.createElement('p');
        this.lfourh.innerText = "Q"
        this.lfourp.innerText = " - Change Planes"
        this.lfour.append(this.lfourh, this.lfourp);
        this.ul.append(this.lone, this.ltwo, this.lthree, this.lfour)
        this.h = document.createElement('h3');
        this.h.innerText = "Welcome to Alternate Planes!";
        this.p = document.createElement('p');
        this.p.id = "desc";
        this.p.innerText = "Alone on a distant planet, not earth, it is much less hospitable then once thought. The landscape has been ravaged by climate change, definitely not earth, and now it's time to get back to your ship! Only one issue, the landscape is jagged and ripped apart, by climate change, that's not on Earth. Good thing you have you're PLANE SHIFTER, a device that allows you to switch realities to fill holes and find you way.Can you make it back? Click me to find out!"
        this.r.append(this.h, this.p);
        this.form = document.createElement('form')
    }

    destroy(){
        console.log('p');
        this.section.remove(this.l);
        this.section.remove(this.r);
    }
}



module.exports = PopUp;