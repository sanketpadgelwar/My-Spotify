console.log("Welcome to Spotify")

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let srcSongIndex =0;

//let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));


let songs = [
    {songName: "Salam e Ishq", filePath: "songs/1.mp3",coverPath: "covers/1.jpg" },
    {songName: "Tum Se Hi", filePath: "songs/2.mp3",coverPath: "covers/2.jpg" },
    {songName: "Bhula Dena", filePath: "songs/3.mp3",coverPath: "covers/3.jpg" },
    {songName: "Teri Hogaiyaan", filePath: "songs/4.mp3",coverPath: "covers/4.jpg" },
    {songName: "Mere Soneya", filePath: "songs/5.mp3",coverPath: "covers/5.jpg" },
    {songName: "Rabba", filePath: "songs/6.mp3",coverPath: "covers/6.jpg" },
    {songName: "Din Na Janeya", filePath: "songs/7.mp3",coverPath: "covers/7.jpg" },
    {songName: "Mehramaan", filePath: "songs/8.mp3",coverPath: "covers/8.jpg" },
    {songName: "Broken", filePath: "songs/9.mp3",coverPath: "covers/9.jpg" },
    {songName: "Humsafar", filePath: "songs/10.mp3",coverPath: "covers/10.jpg" }
]

songItems.forEach((element, i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//Handle Play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

})

//Listen to Events

    //Update Seekbar
    audioElement.addEventListener('timeupdate', () =>{
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value = progress;    
    })

    myProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime = myProgressBar.value * audioElement.duration /100;
    })

    const makeAllPlays = () =>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
    }

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
            songIndex=parseInt(e.target.id);
            srcSongIndex =songIndex+1;
            //console.log(index);
           // console.log(index+1);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${srcSongIndex}.mp3`;
            console.log(audioElement.src);
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime =0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        })
    })