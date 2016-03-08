window.onload = function() {
    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];

    // 当音乐停止，自动停止光盘转动
    audio.addEventListener("ended", function(event) {
        music.setAttribute("class", "");
        // music.style.animationPlayState = "paused";
        // music.style.webkitAnimationPlayState = "paused";
    }, false);


    // 点击音乐图标，控制音乐播放
    // music.onclick = function() {
    //     if (audio.paused) {
    //         audio.play();
    //         this.setAttribute("class", "play");
    //         // this.style.animationPlayState = "running";
    //         // this.style.webkitAnimationPlayState = "running";

    //     } else {
    //         audio.pause();
    //         this.setAttribute("class", "");
    //         // this.style.animationPlayState = "paused";
    //         // this.style.webkitAnimationPlayState = "paused";
    //     };
    // };

    music.addEventListener("touchstart", function(event) {
        if (audio.paused) {
             audio.play();
             this.setAttribute("class", "play");
        } else {
             audio.pause();
             this.setAttribute("class", "");
        };
    }, false);

};









