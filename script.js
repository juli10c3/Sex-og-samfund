window.addEventListener("load", sidenVises);

//use strict
//let timeLeft =

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
}

//STARTSKÆRM SLUT
//SPILLESKÆRM START
function showInfo() {
    console.log("showIntro");
}

function startGame() {
    console.log("startGame");
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
}

function soundsOff() {
    console.log("soundsOff");
}

function soundsOn() {
    console.log("soundsOn");
}

function toggleMusic() {
    console.log("toggleMusic");
}

function musicOff() {
    console.log("musicOff");
}

function musicOn() {
    console.log("musicOn");
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


