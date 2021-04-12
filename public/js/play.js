let mainCover = document.querySelector("#main_cover");

//volume
let volumeMute = document.querySelector("#mute");
let volumeC1 = document.querySelector("#vol-5");
let volumeC2 = document.querySelector("#vol-20");
let volumeC3 = document.querySelector("#vol-40");
let volumeC4 = document.querySelector("#vol-60");
let volumeC5 = document.querySelector("#vol-80");
let volumeC6 = document.querySelector("#vol-100");


var audio = document.getElementById("audio");
mainCover.addEventListener("click", () => {

    if( mainCover.classList.contains("active") )
    {
        audio.pause();
        audio.volume = .05;
        mainCover.classList.remove("active");
        mainCover.classList.add("inactive");
    }
    else
    {
        audio.play();
        audio.volume = .05;
        mainCover.classList.remove("inactive");
        mainCover.classList.add("active");
    }
});

volumeMute.addEventListener("click", async() => {

if(audio.mute === true) await audio.mute === false;
else audio.mute = true;
    
});

volumeC1.addEventListener("click", async() => {

   await audio.volume === .05;
        
    });

volumeC2.addEventListener("click", async() => {

   await audio.volume === .2;
        
    });

volumeC3.addEventListener("click", async() => {

   await audio.volume === .4;
        
    });


volumeC4.addEventListener("click", async() => {

   await audio.volume === .6;
        
    });


volumeC5.addEventListener("click", async() => {

   await audio.volume === .8;
        
    });


volumeC6.addEventListener("click", async() => {

   await audio.volume === 1;
        
    });





let posts = document.querySelectorAll(".p_img");

imagesLoaded( posts, function()
{
   document.querySelector("#cover").classList.add("loaded"); 
   document.querySelector("#loading").classList.add("loaded"); 
});