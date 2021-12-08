const StillBlock = require('./level_blocks');

class Levels {
    constructor(hidden=false){
        this.hidden = hidden;
        this.level = [];
    }

    static levelZero(){
        this.level=[];
        this.level.push(new StillBlock(0, 400, 60, 60, 2, true));
        // this.level.push(new StillBlock(0, 340, 60, 60, 1, true, true));
        this.level.push(new StillBlock(0, 460, 60, 60, 5, true));
        this.level.push(new StillBlock(60, 460, 60, 60, 5, true));
        this.level.push(new StillBlock(60, 400, 60, 60, 2, true));
        this.level.push(new StillBlock(120, 460, 60, 60, 4))
        this.level.push(new StillBlock(120, 400, 60, 60, 1))
        this.level.push(new StillBlock(120, 400, 60, 60, 2, true))
        this.level.push(new StillBlock(120, 460, 60, 60, 5, true))
        this.level.push(new StillBlock(180, 400, 60, 60, 2))
        this.level.push(new StillBlock(180, 460, 60, 60, 5))
        this.level.push(new StillBlock(240, 400, 60, 60, 2))
        this.level.push(new StillBlock(240, 460, 60, 60, 5))
        this.level.push(new StillBlock(300, 400, 60, 60, 2))
        this.level.push(new StillBlock(300, 460, 60, 60, 5))
        this.level.push(new StillBlock(360, 400, 60, 60, 3))
        this.level.push(new StillBlock(360, 460, 60, 60, 6))
        return this.level;
    }
    static levelOne() {
        this.level = [];
        this.level.push(new StillBlock(0, 400, 60, 60, 2));
        this.level.push(new StillBlock(0, 460, 60, 60, 5));
        this.level.push(new StillBlock(60, 460, 60, 60, 5))
        this.level.push(new StillBlock(60, 400, 60, 60, 2))
        this.level.push(new StillBlock(180, 400, 60, 60, 2))
        this.level.push(new StillBlock(180, 460, 60, 60, 5))
        this.level.push(new StillBlock(120, 400, 60, 60, 2))
        this.level.push(new StillBlock(120, 460, 60, 60, 5))
        this.level.push(new StillBlock(240, 400, 60, 60, 2))
        this.level.push(new StillBlock(240, 460, 60, 60, 5))
        this.level.push(new StillBlock(300, 400, 60, 60, 2))
        this.level.push(new StillBlock(300, 460, 60, 60, 5))
        this.level.push(new StillBlock(360, 400, 60, 60, 3))
        this.level.push(new StillBlock(360, 460, 60, 60, 6))
        this.level.push(new StillBlock(360, 400, 60, 60, 2, true))
        this.level.push(new StillBlock(360, 460, 60, 60, 5, true))
        this.level.push(new StillBlock(420, 400, 60, 60, 2, true))
        this.level.push(new StillBlock(420, 460, 60, 60, 5, true))
        this.level.push(new StillBlock(480, 400, 60, 60, 2, true))
        this.level.push(new StillBlock(480, 460, 60, 60, 5, true))
        this.level.push(new StillBlock(540, 400, 60, 60, 2, true))
        this.level.push(new StillBlock(540, 460, 60, 60, 5, true))
        this.level.push(new StillBlock(600, 400, 60, 60, 2, true))
        this.level.push(new StillBlock(600, 460, 60, 60, 5, true))
        this.level.push(new StillBlock(660, 400, 60, 60, 1))
        this.level.push(new StillBlock(660, 460, 60, 60, 4))
        this.level.push(new StillBlock(660, 400, 60, 60, 2, true))
        this.level.push(new StillBlock(660, 460, 60, 60, 5, true))
        this.level.push(new StillBlock(720, 400, 60, 60, 2))
        this.level.push(new StillBlock(720, 460, 60, 60, 5))
        this.level.push(new StillBlock(780, 400, 60, 60, 2))
        this.level.push(new StillBlock(780, 460, 60, 60, 5))
        this.level.push(new StillBlock(840, 400, 60, 60, 2))
        this.level.push(new StillBlock(840, 460, 60, 60, 5))
        return this.level;
    }
    static allLevels() {
        let arr = [];
        arr.push(Levels.levelZero())
        arr.push(Levels.levelOne())
        return arr;
    }
}




module.exports = Levels;