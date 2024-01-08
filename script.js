//
let songIndex=0;
let elementAudio=new Audio('byDefault.mp3'); // import audio 
let progressBar=document.getElementById('porgressBar'); 
let gif=document.getElementById('gif');
let bottomSongName=document.getElementById('bottomSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songsArray = [
  {songsName: 'Cut Off',filePath: 'songs/1.mp3',songCover: 'covers/1.jpg'},
  {songsName: 'Hiyonat',filePath: 'songs/2.mp3',songCover: 'covers/2.jpg'},
  {songsName: 'Joker',filePath: 'songs/3.mp3',songCover: 'covers/3.jpg'},
  {songsName: 'JONY',filePath: 'songs/4.mp3',songCover: 'covers/4.jpg'},
  {songsName: 'Linkin',filePath: 'songs/5.mp3',songCover: 'covers/5.jpg'},
  {songsName: 'Ploua',filePath: 'songs/6.mp3',songCover: 'covers/6.jpg'},
  {songsName: 'ruof',filePath: 'songs/7.mp3',songCover: 'covers/2.jpg'}
];

songItems.forEach((element, i) => {
  let imgElement = element.querySelector('img');
  imgElement.src = songsArray[i].songCover;
  let songNameElement = element.querySelector('.SongName');
  songNameElement.innerHTML = songsArray[i].songsName;
});


// playButton
playNow.addEventListener('click',()=>{
    if(elementAudio.paused || elementAudio.currentTime<=0){
        elementAudio.play();
        playNow.classList.remove('fa-circle-play')
        playNow.classList.add('fa-circle-pause')
    gif.style.opacity=1;
    }
    else{
        elementAudio.pause();
        playNow.classList.add('fa-circle-play')
        playNow.classList.remove('fa-circle-pause')
        gif.style.opacity=0;
    }    
})


// progressBar change time with timeupdate fuction
elementAudio.addEventListener('timeupdate',()=>{
    progress=parseInt((elementAudio.currentTime/elementAudio.duration)*100);  // make the percantage of song 
    progressBar.value=progress; // appand song percentage to progressBar
})
progressBar.addEventListener('change',()=>{
    elementAudio.currentTime=progressBar.value * elementAudio.duration/100;
})



// Song list play
const makeAllPlays=()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-circle-play')
    element.classList.remove('fa-circle-pause')
})

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
      gif.style.opacity = 1;
      makeAllPlays();
      index = parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      elementAudio.src = songsArray[index].filePath;
      bottomSongName.innerText=songsArray[index].songsName;
      elementAudio.currentTime = 0;
      elementAudio.play();
      playNow.classList.add('fa-circle-pause');
      playNow.classList.remove('fa-circle-play');
    });
  });



// previous
document.getElementById('prevous').addEventListener('click', () => {
    if (songIndex <= 0) {
      songIndex = songsArray.length - 1;
    } else {
      songIndex -= 1;
    }
    elementAudio.src = songsArray[songIndex].filePath;
    elementAudio.currentTime = 0;
    bottomSongName.innerText=songsArray[songIndex].songsName;

    elementAudio.play();
    playNow.classList.add('fa-circle-pause');
    playNow.classList.remove('fa-circle-play');
  });
  
  // next
  document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songsArray.length - 1) {
      songIndex = 0;
    } else {
      songIndex += 1;
    }
    elementAudio.src = songsArray[songIndex].filePath;
    elementAudio.currentTime = 0;
    bottomSongName.innerText=songsArray[songIndex].songsName;
    elementAudio.play();
    playNow.classList.add('fa-circle-pause');
    playNow.classList.remove('fa-circle-play');
  });
  