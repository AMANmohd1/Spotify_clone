console.log("Welcome to Spotify");

let Index = 0;
let songs = [
    {songName:"Song 1",filePath:"songs\1.mp3",coverPath:"covers\1.jpg"},
    {songName:"Song 2",filePath:"songs\2.mp3",coverPath:"covers\2.jpg"},
    {songName:"Song 3",filePath:"songs\3.mp3",coverPath:"covers\3.jpg"},
    {songName:"Song 4",filePath:"songs\4.mp3",coverPath:"covers\4.jpg"}
]
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let playBtn = document.getElementById('playBtn')
let songItems = Array.from(document.getElementsByClassName('songItem'));
let bottomName = document.getElementById('bottomName');

songItems.forEach((element,i)=>{
    console.log(element,i);
    // element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})


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

const makeAllplay=()=>{
    Array.from(document.getElementsByClassName('songItemPlayBtn')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlayBtn')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplay();
        console.log(e.target);
        Index = parseInt(e.target.id);
        // e.target.classList.remove('fa-play-circle');
        // e.target.classList.add('fa-pause-circle');
        bottomName.innerText = songs[Index].songName;
        audioElement.src = `songs/${Index+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        // masterPlay.classList.remove('fa-play-circle');
        // masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(Index >= 3){
        Index = 0;
    }
    else{
        Index += 1;
    }
    bottomName.innerText = songs[Index].songName;
    audioElement.src = `songs/${Index+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click',()=>{
    if(Index <= 0){
        Index = 0;
    }
    else{
        Index--;
    }
    bottomName.innerText = songs[Index].songName;
    audioElement.src = `songs/${Index+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
})