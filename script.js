window.addEventListener("load", sidenVises);

//use strict
//let timeLeft =
let showSettingsEffektSound = true;
let showSettingsMusic = true;

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

}



function hideStart() {
    console.log("hideStart");
    document.querySelector("#play").removeEventListener("click", hideStart);
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);
     document.querySelector("#sfx").addEventListener("click", toggleSounds);
    document.querySelector("#music").addEventListener("click", toggleMusic);
}

//STARTSKÆRM SLUT
//SPILLESKÆRM START
function showInfo() {
    console.log("showIntro");
}

function startGame() {
    console.log("startGame");
    document.querySelector("#picture").classList = "nude";
}

function playingGame() {
    console.log("playingGame");
}

//FIGURELEMENTER
function screenClick() {
    console.log("screenClick");
    if (this.classList.contains("nude")) {
            console.log("du har klikket på nude");

//            life--;
//            console.log("life");
//            document.querySelector("#heart" + (life + 1)).classList.add("hide");
//            //gør at et hjerte fjernes af gangen
//            console.log(this);


        } else if (this.classList.contains("normal")) {
            console.log("du har klikket på normal");
//            points++;
//            console.log("points");
//            document.querySelector("#points").innerHTML = points;
//            console.log(this);

        }
        this.classList.add("dissappear");
        this.addEventListener("animationend", newPic);
        gameStatus();
}

function newPic() {
    console.log("newPic");
        this.className = "";
        //^betyder at klasserne forsvinder
        console.log("random");
        this.classList.add("billeder" + Math.floor((Math.random() * 8) + 1));
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
//    document.querySelector("#sfx1").muted = true;
//    document.querySelector("#sfx2").muted = true;
}

function soundsOn() {
    console.log("soundsOn");
      document.querySelector("#sfx").classList = "sfx_on";
//    document.querySelector("#sfx1").muted = false;
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


