window.addEventListener("load", sidenVises);

//use strict
//let timeLeft =
let showSettingsEffektSound = true;
let showSettingsMusic = true;
let points = 0;
let life = 1;

//STARTSKÆRM START
function sidenVises() {
    console.log("sidenVises");
    showStart();
}


function showStart() {
    console.log("showStart");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);
    document.querySelector("#sfx").addEventListener("click", toggleSounds);
    document.querySelector("#music").addEventListener("click", toggleMusic);
}



function hideStart() {
    console.log("hideStart");
    document.querySelector("#play").removeEventListener("click", hideStart);
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#start").addEventListener("animationend", startGame);



}

//STARTSKÆRM SLUT
//SPILLESKÆRM START
function showInfo() {
    console.log("showIntro");
}

function startGame() {
    console.log("startGame");

    //    document.querySelector("#phone_btn").addEventListener("click", screenClick);
    //    document.querySelector("#phone_btn").classList.add("pulse");
    document.querySelector("#picture").addEventListener("click", screenClick);

    //    document.querySelector("#picture2").addEventListener("click", screenClick);
    //    document.querySelector("#picture3").addEventListener("click", screenClick);
    //    document.querySelector("#picture4").addEventListener("click", screenClick);


}
//
//function playingGame() {
//    console.log("playingGame");
//}

//FIGURELEMENTER
function screenClick() {
    console.log("screenClick");
    if (this.classList.contains("type1")) {
        console.log("du har klikket på nude");
        document.querySelector("#sfx1").play();
        document.querySelector("#sfx1").currentTime = 0;
        console.log("life");

        life--;
        //        console.log("life");
        //        document.querySelector("#energy" + (life + 1));
        //gør at et hjerte fjernes af gangenf
        console.log(this);
        this.classList.add("hide");

        //        nulstil();
    } else if (this.classList.contains("type2")) {
        console.log("du har klikket på normal");
        document.querySelector("#sfx1").play();
        document.querySelector("#sfx1").currentTime = 0;

        console.log("points");
        points++;
        //        console.log("points");
        //        document.querySelector("#points").innerHTML = points;
        console.log(this);
        this.classList.add("hide");
        //        nulstil();

    } else if (this.classList.contains("type3")) {
        console.log("du har klikket på normal");
        document.querySelector("#sfx1").play();
        document.querySelector("#sfx1").currentTime = 0;
        console.log("points");

        points++;
        //        console.log("points");
        //        document.querySelector("#points").innerHTML = points;
        console.log(this);
        this.classList.add("hide");
        //        nulstil();

    } else if (this.classList.contains("type4")) {
        console.log("du har klikket på normal");
        document.querySelector("#sfx1").play();
        document.querySelector("#sfx1").currentTime = 0;
        console.log("points");
        points++;
        //        document.querySelector("#points").innerHTML = points;
        console.log(this);
        this.classList.add("hide");
        //        nulstil();

    } else if (this.classList.contains("type5")) {
        console.log("du har klikket på normal");
        document.querySelector("#sfx1").play();
        document.querySelector("#sfx1").currentTime = 0;
        console.log("points");

        points++;

        //        document.querySelector("#points").innerHTML = points;
        console.log(this);
        this.classList.add("hide");
        //        nulstil();

    } else if (this.classList.contains("type6")) {
        console.log("du har klikket på normal");
        document.querySelector("#sfx1").play();
        document.querySelector("#sfx1").currentTime = 0;
        console.log("points");
        points++;

        //        document.querySelector("#points").innerHTML = points;
        console.log(this);
        this.classList.add("hide");
        //        nulstil();

    } else if (this.classList.contains("type7")) {
        console.log("du har klikket på normal");
        document.querySelector("#sfx1").play();
        document.querySelector("#sfx1").currentTime = 0;
        console.log("points");
        points++;

        //        document.querySelector("#points").innerHTML = points;
        console.log(this);
        this.classList.add("hide");
        //        nulstil();

    } else if (this.classList.contains("type8")) {
        console.log("du har klikket på nude");
        document.querySelector("#sfx1").play();
        document.querySelector("#sfx1").currentTime = 0;
        console.log("life");
        life--;

        //        document.querySelector("#energy" + (life + 1));
        //gør at et hjerte fjernes af gangenf
        console.log(this);
        this.classList.add("hide");

        //        nulstil();

    }
    this.classList.add("disappear");
    this.addEventListener("animationend", newPic);
    gameStatus();
}


//function newNude() {
//
//}

//function nulstil() {
//    console.log("nulstil");
//    document.querySelector("#picture").removeAttribute("class");
//    newPic();
//    setTimeout(3000);
//
//}

function newPic() {
    console.log("newPic");
    this.className = "";
    //^betyder at klasserne forsvinder
    console.log("random");
    this.classList.add("type" + Math.floor((Math.random() * 8) + 1)); //    document.querySelector("#picture" + myRandom()).classList.add("type");
    //}
    //
    //function myRandom() {
    //    console.log("my random")
    //    let tilfaeldigttal = Math.floor(Math.random() * 4) + 1;
    //    return tilfaeldigttal;
}
//MUSIK OG LYD START


function toggleSounds() {
    console.log("toggleSounds");
    if (showSettingsEffektSound == false) {
        console.log("true");
        showSettingsEffektSound = true;

        soundsOn();
    } else {
        console.log("false");
        showSettingsEffektSound = false;

        soundsOff();
    }
}

function soundsOff() {
    console.log("soundsOff");
    document.querySelector("#sfx").classList = "sfx_off";
    document.querySelector("#sfx1").muted = true;
    //    document.querySelector("#sfx2").muted = true;
}

function soundsOn() {
    console.log("soundsOn");
    document.querySelector("#sfx").classList = "sfx_on";
    document.querySelector("#sfx1").muted = false;
    //    document.querySelector("#sfx2").muted = false;

}

function toggleMusic() {
    console.log("toggleMusic");
    //       document.querySelector("#mymusic").play();
    if (showSettingsMusic == false) {
        console.log("true");
        showSettingsMusic = true;
        musicOn();
    } else {
        console.log("false");
        showSettingsMusic = false;
        musicOff();
    }
}

function musicOff() {
    console.log("musicOff");
    document.querySelector("#music").classList = "music_off";
    //    document.querySelector("#mymusic").muted = true;

}

function musicOn() {
    console.log("musicOn");
    document.querySelector("#music").classList = "music_on";
    //    document.querySelector("#mymusic").muted = false;

}



//MUSIK OG LYD SLUT
//GAMESTATUS START
function gameStatus() {
    console.log("gameStatus");
    console.log(life);
    if (life == 0) {
        document.querySelector("#gameover").classList.remove("hide");
    } else if (points == 7) {
        document.querySelector("#levelcomplete").classList.remove("hide");
    }
}

function gameOver() {
    console.log("gameOver");
}

function levelComplete() {
    console.log("levelComplete");
}

function playAgain() {
    console.log("playAgain");
}

//GAMESTATUS SLUT
