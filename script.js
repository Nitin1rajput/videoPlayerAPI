const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//Play Pause Video
function toggleVideoStatus() {
  
  if(video.paused){
    
    video.play();
  }else {
    video.pause();
  }
}


//Update play/pause
function updatePlayIcon() {
  if(video.paused){
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
  }else {
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
  }
}
//Update PRogress
function updateProgress() {
  progress.value = (video.currentTime / video.duration )* 100;
  console.log((video.currentTime)* 100);
  
  //Get Minutes
  let mints = Math.floor(video.currentTime/60);
  if(mints < 10) {
    mints = '0' + String(mints);
  }
  //Get Seconds
  let secs = Math.floor(video.currentTime % 60);
  if(secs < 10) {
    secs = '0' + String(secs);
  }
  timestamp.innerHTML = `${mints}:${secs}`
}
//Settinf Video Progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration)/100;
}
// Stoping Video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}
console.log(video);
//Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

console.log(video.paused);