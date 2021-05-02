let mainCover = document.querySelector("#main_cover");




var audio = document.getElementById("audio");
mainCover.addEventListener("click", () => {

    if( mainCover.classList.contains("active") )
    {
        audio.pause();
        if(!sessVol || sessVol === undefined || sessVol === null) sessVol = 1;
        audio.volume = sessVol;
        mainCover.classList.remove("active");
        mainCover.classList.add("inactive");
    }
    else
    {
        audio.play();
        if(!sessVol || sessVol === undefined || sessVol === null) sessVol = 1;
        audio.volume = sessVol;
        mainCover.classList.remove("inactive");
        mainCover.classList.add("active");
    }
});



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