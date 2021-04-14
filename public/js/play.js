let mainCover = document.querySelector("#main_cover");


//volume
let volumeMute = document.querySelector("#mute");
let volumeC1 = document.querySelector("#vol-5");
let volumeC2 = document.querySelector("#vol-20");
let volumeC3 = document.querySelector("#vol-40");
let volumeC4 = document.querySelector("#vol-60");
let volumeC5 = document.querySelector("#vol-80");
let volumeC6 = document.querySelector("#vol-100");
let sessVol;

var audio = document.getElementById("audio");
mainCover.addEventListener("click", () => {

    if( mainCover.classList.contains("active") )
    {
        audio.pause();
        if(!sessVol || sessVol === undefined || sessVol === null) sessVol = 0.05;
        audio.volume = sessVol;
        mainCover.classList.remove("active");
        mainCover.classList.add("inactive");
    }
    else
    {
        audio.play();
        if(!sessVol || sessVol === undefined || sessVol === null) sessVol = 0.05;
        audio.volume = sessVol;
        mainCover.classList.remove("inactive");
        mainCover.classList.add("active");
    }
});

function muteAudio () {

    if(!audio.muted) {
        audio.muted = true;
        document.getElementById("muteState").innerHTML = "Muted ✅"
    }
    else {
        audio.muted = false;
        document.getElementById("muteState").innerHTML = "Not Muted ❌"
    }

}

function vol5 () { audio.volume = 0.05; sessVol = 0.05; document.getElementById("currentVol").innerHTML = "5%" }
function vol20 () { audio.volume = 0.2; sessVol = 0.2; document.getElementById("currentVol").innerHTML = "20%" }
function vol40 () { audio.volume = 0.4; sessVol = 0.4; document.getElementById("currentVol").innerHTML = "40%" }
function vol60 () { audio.volume = 0.6; sessVol = 0.6; document.getElementById("currentVol").innerHTML = "60%" }
function vol80 () { audio.volume = 0.8; sessVol = 0.8; document.getElementById("currentVol").innerHTML = "80%" }
function vol100 () { audio.volume = 1; sessVol = 1; document.getElementById("currentVol").innerHTML = "100%" }

setInterval(() => {
    $('#nowPlaying').load(document.URL +  '  #nowPlaying');
}, 7500)


let posts = document.querySelectorAll(".p_img");

imagesLoaded( posts, function()
{
   document.querySelector("#cover").classList.add("loaded"); 
   document.querySelector("#loading").classList.add("loaded"); 
});


setInterval(() => {
    $("#nowPlaying").load(" #nowPlaying > *");
}, 60000)