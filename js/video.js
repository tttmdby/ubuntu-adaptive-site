'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var video = document.querySelector('.start-now__video');
  var button = document.querySelector('.start-now__video-play-button');
  var wrapper = document.querySelector('.start-now__video-wrapper');

  if (!video || !button || !wrapper) return;

  function toggleVideo() {
    if (video.paused) {
      video.play();
      button.style.display = 'none';
    } else {
      video.pause();
      button.style.display = '';
    }
  }

  button.addEventListener('click', toggleVideo);
  wrapper.addEventListener('click', function (e) {
    if (!e.target.classList.contains('start-now__video-play-button')) {
      toggleVideo();
    }
  });
});