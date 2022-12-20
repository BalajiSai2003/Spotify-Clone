console.log("Welcome To Spotify");
//Initialize variables
let songIndex=0;
let audioElement= new Audio("songs/Rick-Astley-Never-Gonna-Give-You-Up.mp3");
let masterPlay=document.getElementById("masterplay");
let progressBar=document.getElementById("progressBar");
let gif=document.getElementById("gif");
let masterSongName=document.getElementById("mastersongName")
let soongItem=Array.from( document.getElementsByClassName("songItem"))
let songs=[
    {songName:"Never Gonna Give You Up", filePath:"songs/Rick-Astley-Never-Gonna-Give-You-Up.mp3",coverPath:"covers/Rick-Astley-Never-Gonna-Give-You-Up.jpg"},
    {songName:"The Coconut", filePath:"songs/The-Coconut.mp3",coverPath:"covers/The-Coconut.jpg"},
    {songName:"Coffin Dance", filePath:"songs/Coffin-Dance.mp3",coverPath:"covers/Coffin-Dance.jpg"},
    {songName:"Jambalakadi Jaru Mitaya", filePath:"songs/Jambalakadi-Jaru-Mitaya-song.mp3",coverPath:"covers/Jambalakadi-Jaru-Mitayaimg.jpg"},
    {songName:"Never Gonna Give You Up", filePath:"songs/Rick-Astley-Never-Gonna-Give-You-Up.mp3",coverPath:"covers/Rick-Astley-Never-Gonna-Give-You-Up.jpg"},
    {songName:"The Coconut", filePath:"songs/The-Coconut.mp3",coverPath:"covers/The-Coconut.jpg"},
    {songName:"Coffin Dance", filePath:"songs/Coffin-Dance.mp3",coverPath:"covers/Coffin-Dance.jpg"},
    {songName:"Jambalakadi Jaru Mitaya", filePath:"songs/Jambalakadi-Jaru-Mitaya-song.mp3",coverPath:"covers/Jambalakadi-Jaru-Mitayaimg.jpg"},
    {songName:"Never Gonna Give You Up", filePath:"songs/Rick-Astley-Never-Gonna-Give-You-Up.mp3",coverPath:"covers/Rick-Astley-Never-Gonna-Give-You-Up.jpg"},
    {songName:"The Coconut", filePath:"songs/The-Coconut.mp3",coverPath:"covers/The-Coconut.jpg"},
    {songName:"Coffin Dance", filePath:"songs/Coffin-Dance.mp3",coverPath:"covers/Coffin-Dance.jpg"},
    {songName:"Jambalakadi Jaru Mitaya", filePath:"songs/Jambalakadi-Jaru-Mitaya-song.mp3",coverPath:"covers/Jambalakadi-Jaru-Mitayaimg.jpg"},
    {songName:"Never Gonna Give You Up", filePath:"songs/Rick-Astley-Never-Gonna-Give-You-Up.mp3",coverPath:"covers/Rick-Astley-Never-Gonna-Give-You-Up.jpg"},
    {songName:"The Coconut", filePath:"songs/The-Coconut.mp3",coverPath:"covers/The-Coconut.jpg"},
    {songName:"Coffin Dance", filePath:"songs/Coffin-Dance.mp3",coverPath:"covers/Coffin-Dance.jpg"},
    {songName:"Jambalakadi Jaru Mitaya", filePath:"songs/Jambalakadi-Jaru-Mitaya-song.mp3",coverPath:"covers/Jambalakadi-Jaru-Mitayaimg.jpg"},
]
const makeAllplay=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
}
)}
const GifOff=()=>{
        Array.from(document.getElementsByClassName("songlistplay")).forEach((element)=>{
        element.style.opacity=0
    }
)}
soongItem.forEach((element ,i)=> {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
    // element.getElementsByClassName("TimeStamp").innerHTML=songs[i].audioElement.duration;
});
//Handle play/pause click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused  || audioElement.currentTime<=0){
        makeAllplay();
        GifOff();
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        document.getElementById(`${songIndex+10}`).style.opacity=1;
        gif.style.opacity=1;
    }
    else{
        makeAllplay();
        GifOff();
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        document.getElementById(`${songIndex+10}`).style.opacity=0;
        gif.style.opacity=0;
    }
})
//Listen to events
audioElement.addEventListener("timeupdate",()=>{
    // console.log("timeupdate")
    //update seekbar
    progress=parseFloat((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})
progressBar.addEventListener("change",()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})

GifOff();
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllplay();
        GifOff();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        audioElement.src=`${songs[songIndex].filePath}`;
        masterSongName.innerText=songs[songIndex].songName;
        document.getElementsByClassName("songbannerimg")[0].src=songs[songIndex].coverPath
        audioElement.play()
        document.getElementById(`${songIndex+10}`).style.opacity=1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
    
})
// console.log(Array.from(document.getElementsByClassName("songItemPlay")))
document.getElementById("next").addEventListener("click",()=>{
    GifOff();
    makeAllplay();
    if(songIndex>9){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    audioElement.src=`${songs[songIndex].filePath}`;
    masterSongName.innerText=songs[songIndex].songName;
    document.getElementsByClassName("songbannerimg")[0].src=songs[songIndex].coverPath
    audioElement.currentTime=0;    
    audioElement.play()
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    document.getElementById(`${songIndex+10}`).style.opacity=1;
    document.getElementById(`${songIndex}`).classList.remove("fa-circle-play")
    document.getElementById(`${songIndex}`).classList.add("fa-circle-pause")

})
document.getElementById("previous").addEventListener("click",()=>{
    GifOff();
    makeAllplay();
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1
    }
    audioElement.src=`${songs[songIndex].filePath}`;
    masterSongName.innerText=songs[songIndex].songName;
    document.getElementsByClassName("songbannerimg")[0].src=songs[songIndex].coverPath
    // console.log(songs[songIndex].coverPath)
    audioElement.currentTime=0;        
    audioElement.play()
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    document.getElementById(`${songIndex+10}`).style.opacity=1;
    document.getElementById(`${songIndex}`).classList.remove("fa-circle-play")
    document.getElementById(`${songIndex}`).classList.add("fa-circle-pause")
})
