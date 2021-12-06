const StillBlock = require('./level_blocks');

class Levels {
    constructor(hidden=false){
        this.hidden = hidden;
        this.level = [];
    }

    lev(){
        this.level=[];
        this.level.push(new StillBlock(0, 400, 60, 60, 2, true));
        this.level.push(new StillBlock(0, 460, 60, 60, 5, true));
        this.level.push(new StillBlock(60, 460, 60, 60, 4));
        this.level.push(new StillBlock(60, 400, 60, 60, 1));
        this.level.push(new StillBlock(60, 460, 60, 60, 5, true))
        this.level.push(new StillBlock(60, 400, 60, 60, 2, true))
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
        return this.level;
    }
}

module.exports = Levels;