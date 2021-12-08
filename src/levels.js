const StillBlock = require('./level_blocks');

class Levels {
    constructor(hidden=false){
        this.hidden = hidden;
        this.level = [];
    }

    static levelZero(){
        this.level=[];
        this.level.push(new StillBlock(0, 400, 60, 60, 2, 1));
        // this.level.push(new StillBlock(0, 340, 60, 60, 1, 1, 1));
        this.level.push(new StillBlock(0, 460, 60, 60, 5, 1));
        this.level.push(new StillBlock(60, 460, 60, 60, 5, 1));
        this.level.push(new StillBlock(60, 400, 60, 60, 2, 1));
        this.level.push(new StillBlock(120, 460, 60, 60, 4, 0))
        this.level.push(new StillBlock(120, 400, 60, 60, 1, 0))
        this.level.push(new StillBlock(120, 400, 60, 60, 2, 1))
        this.level.push(new StillBlock(120, 460, 60, 60, 5, 1))
        this.level.push(new StillBlock(180, 400, 60, 60, 2, 0))
        this.level.push(new StillBlock(180, 460, 60, 60, 5, 0))
        this.level.push(new StillBlock(240, 400, 60, 60, 2, 0))
        this.level.push(new StillBlock(240, 460, 60, 60, 5, 0))
        this.level.push(new StillBlock(300, 400, 60, 60, 2, 0))
        this.level.push(new StillBlock(300, 460, 60, 60, 5, 0))
        this.level.push(new StillBlock(360, 400, 60, 60, 3, 0))
        this.level.push(new StillBlock(360, 460, 60, 60, 6, 0))
        return this.level;
    }
    static levelOne() {
        this.level = [];
        this.level.push(new StillBlock(0, 400, 60, 60, 2, -1));
        this.level.push(new StillBlock(0, 460, 60, 60, 5, -1));
        this.level.push(new StillBlock(60, 460, 60, 60, 5, -1))
        this.level.push(new StillBlock(60, 400, 60, 60, 2, -1))
        this.level.push(new StillBlock(180, 400, 60, 60, 2, -1))
        this.level.push(new StillBlock(180, 460, 60, 60, 5, -1))
        this.level.push(new StillBlock(120, 400, 60, 60, 2, -1))
        this.level.push(new StillBlock(120, 460, 60, 60, 5, -1))
        this.level.push(new StillBlock(240, 400, 60, 60, 2, -1))
        this.level.push(new StillBlock(240, 460, 60, 60, 5,-1))
        this.level.push(new StillBlock(300, 400, 60, 60, 1, 1))
        this.level.push(new StillBlock(300, 460, 60, 60, 4, 1))
        this.level.push(new StillBlock(300, 400, 60, 60, 2, -1))
        this.level.push(new StillBlock(300, 460, 60, 60, 5, -1))
        this.level.push(new StillBlock(360, 400, 60, 60, 3, 0))
        this.level.push(new StillBlock(360, 460, 60, 60, 6, 0))
        this.level.push(new StillBlock(360, 400, 60, 60, 2, 1))
        this.level.push(new StillBlock(360, 460, 60, 60, 5, 1))
        this.level.push(new StillBlock(420, 400, 60, 60, 2, 1))
        this.level.push(new StillBlock(420, 460, 60, 60, 5, 1))
        this.level.push(new StillBlock(480, 400, 60, 60, 2, 1))
        this.level.push(new StillBlock(480, 460, 60, 60, 5, 1))
        this.level.push(new StillBlock(540, 400, 60, 60, 2, 1))
        this.level.push(new StillBlock(540, 460, 60, 60, 5, 1))
        this.level.push(new StillBlock(600, 400, 60, 60, 2, 1))
        this.level.push(new StillBlock(600, 460, 60, 60, 5, 1))
        this.level.push(new StillBlock(660, 400, 60, 60, 1, 0))
        this.level.push(new StillBlock(660, 460, 60, 60, 4, 0))
        this.level.push(new StillBlock(660, 400, 60, 60, 2, 1))
        this.level.push(new StillBlock(660, 460, 60, 60, 5, 1))
        this.level.push(new StillBlock(720, 400, 60, 60, 2, 0))
        this.level.push(new StillBlock(720, 460, 60, 60, 5, 0))
        this.level.push(new StillBlock(780, 400, 60, 60, 2, 0))
        this.level.push(new StillBlock(780, 460, 60, 60, 5, 0))
        this.level.push(new StillBlock(840, 400, 60, 60, 2, 0))
        this.level.push(new StillBlock(840, 460, 60, 60, 5, 0))
        return this.level;
    }

    static levelTwo(){
        this.level = [];
        this.level.push(new StillBlock(0, 400, 60, 60, 2, 0));
        this.level.push(new StillBlock(0, 460, 60, 60, 5, 0));
        this.level.push(new StillBlock(60, 400, 60, 60, 3, 0));
        this.level.push(new StillBlock(60, 460, 60, 60, 6, 0));
        this.level.push(new StillBlock(180, 320, 60, 60, 13, -1));
        this.level.push(new StillBlock(240, 320, 60, 60, 15, -1));
        this.level.push(new StillBlock(300, 260, 60, 60, 13, 1));
        this.level.push(new StillBlock(360, 260, 60, 60, 15, 1));
        this.level.push(new StillBlock(420, 260, 60, 60, 13, 1));
        this.level.push(new StillBlock(480, 260, 60, 60, 14, 1));
        this.level.push(new StillBlock(540, 260, 60, 60, 15, 1));
        this.level.push(new StillBlock(600, 320, 60, 60, 13, -1));
        this.level.push(new StillBlock(660, 320, 60, 60, 14, -1));
        this.level.push(new StillBlock(720, 320, 60, 60, 15, -1));
        this.level.push(new StillBlock(840, 400, 60, 60, 1, 1));
        this.level.push(new StillBlock(840, 460, 60, 60, 4, 1));
        return this.level;
    }
    static allLevels() {
        let arr = [];
        arr.push(Levels.levelZero());
        arr.push(Levels.levelOne());
        arr.push(Levels.levelTwo());
        return arr;
    }
}




module.exports = Levels;