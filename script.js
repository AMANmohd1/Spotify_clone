console.log("Welcome to Spotify");

let songIndex = 0;
let songs = [
    {songName:"Song1",filePath:"",coverPath:""},
    {songName:"Song1",filePath:"",coverPath:""},
    {songName:"Song1",filePath:"",coverPath:""},
    {songName:"Song1",filePath:"",coverPath:""},
    {songName:"Song1",filePath:"",coverPath:""},
]
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let playBtn = document.getElementById('playBtn')
//handle play/pause

playBtn.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})


//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})