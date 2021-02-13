const musicContainer = document.getElementById('musiccontainer');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = [
   'You\'re like Melody',
   'All Around Me',
   'Medicine', 
   'N B U',
   'Onyeka', 
   'Running Over', 
   '1 Milli',
   'Starving', 
   'Holy Ground', 
   'Wild', 
];

//Keep track of songs
let songIndex = 0;

//Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song dets
function loadSong(song) {
   title.innerText = song;
   audio.src = `Music/${song}.mp3`;
   cover.src = `Images/${song}.jpg`;
}

// Play song
function playSong() {
   musicContainer.classList.add('play');
   playBtn.querySelector('i.fas').classList.remove('fa-play');
   playBtn.querySelector('i.fas').classList.add('fa-pause');

   audio.play();
}

// Pause song
function pauseSong() {
   musicContainer.classList.remove('play');
   playBtn.querySelector('i.fas').classList.add('fa-play');
   playBtn.querySelector('i.fas').classList.remove('fa-pause');

   audio.pause();
}

// Previous song
function prevSong() {
   songIndex--;
   if (songIndex < 0) {
      songIndex = songs.length - 1;
   }

   loadSong(songs[songIndex]);

   playSong();
}

// Next song
function nextSong() {
   songIndex++;
   if (songIndex > songs.length - 1) {
      songIndex = 0;
   }

   loadSong(songs[songIndex]);

   playSong();
}

// Update progress bar
function updateProgress(e) {
   const { duration, currentTime } = e.srcElement;
   const progressPercent = (currentTime / duration) * 100
   progress.style.width = `${progressPercent}%`;
}

// Set Progress bar
function setProgress(e) {
   const width = this.clientWidth;
   const clickX = e.offsetX;
   const duration = audio.duration;
   audio.currentTime = (clickX / width) * duration;
}

// Event Listeners

// Play or Pause song
playBtn.addEventListener('click', () => {
   const isPlaying = musicContainer.classList.contains('play');

   if (isPlaying) {
      pauseSong();
   } else {
      playSong();
   }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

var i=0;
var k=0;
var txt=["Babygirl", "Love", "Superstar", "Wish Upon A Shooting Star", "Sweetheart",  "Sugar", "Queen"];
var speed=250;
var eraseSpeed=100;
var nextTextSpeed=2000;
var j=0;
function typeWriter()
{
  if(i<txt[j].length)
  {
    document.querySelector(".pro").textContent +=txt[j].charAt(i);
    i++;
    setTimeout(typeWriter,speed);
  }
  else
  {
    setTimeout(erase,nextTextSpeed);
  }
}
function erase()
{
  if(i>0)
  {
    document.querySelector(".pro").textContent =txt[j].substring(0,i-1);
    i--;
    setTimeout(erase,eraseSpeed);
  }
  else
  {
    j++;
    if(j>=txt.length)
    {j=0;
    }
    setTimeout(typeWriter,speed+1000);
  }
}

typeWriter();
