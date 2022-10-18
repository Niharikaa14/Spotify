


console.log("welcome to spotify");

// Intialize the  variables
let songIndex = 0;
 let audioElement = new Audio('img/1.mp3');

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "1.mp4", filePath: "img/1.mp4", coverPath: "img/Mpic2.jpg" },
    { songName: "champion.mp3", filePath: "img/champion.mp3", coverPath: "img/Mpic1.jpg" },
    { songName: "Chidiya.mp3", filePath: "img/Chidiya.mp3", coverPath: "img/Mpic6.jpg" },
    { songName: "let me love u", filePath: "img/let me love u.mp3", coverPath: "img/Mpic4.jpg" },
    { songName: "mayian mainu", filePath: "img/mayian mainu.mp3", coverPath: "img/Mpic5.jpg" },
    { songName: "Mera mann", filePath: "img/Mera mann.mp3", coverPath: "img/Mpic6.jpg" },
    { songName: "Ranjha", filePath: "img/Ranjha.mp3", coverPath: "img/Mpic2.jpg" },

]

songItems.forEach((element, i) => {
    //    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})



// audioElement.play();
//let audioElement = new Audio('Shaamat.mp4');


//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})


//Listen to event 
audioElement.addEventListener('timeupdate', () => {

    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
//        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `img/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
    songIndex += 1;
    }

    audioElement.src = `img/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
    songIndex -= 1;
    }

    audioElement.src = `img/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})






