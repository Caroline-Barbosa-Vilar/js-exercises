'use strict';

const sounds = {
  'A': 'boom.wav',
  'S': 'clap.wav',
  'D': 'hihat.wav',
  'F': 'kick.wav',
  'G': 'openhat.wav',
  'H': 'ride.wav',
  'J': 'snare.wav',
  'K': 'tink.wav',
  'L': 'tom.wav'
}

const createDiv = (text) => {
  const div = document.createElement ('div');
  div.classList.add('key');
  div.textContent = text;
  div.id = text;
  document.getElementById('container').appendChild(div);
}

const display = (sounds) => {
  Object.keys(sounds).forEach(createDiv);
}

display(sounds);

