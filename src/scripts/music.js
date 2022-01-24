class Sound {
    constructor(){
        this.src = "./Music/blip-stream-kevin-macleod-main-version-04-44-7998.mp3"
        this.music = document.createElement("audio");
        this.music.src = this.src;
        this.music.setAttribute("preload", "auto");
        this.music.setAttribute("controls", "none");
        this.music.style.display = "none";
        this.music.volume = .02;
        document.body.appendChild(this.music);
        this.musicPlaying = false;

    }

    playMusic(){
        this.music.play();
    }

    stopMusic(){
        this.music.pause();
    }
}

module.exports = Sound;