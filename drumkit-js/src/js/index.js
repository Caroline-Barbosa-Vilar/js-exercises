'use strict';

const sounds = {
  'A': 'boom.wav',
  'S': 'clap.wav',
}

const createDiv = (text) => {
  const div = document.createElement ('div');
  div.classList.add('key');
  div.textContent = text;
  div.id = text;
  document.getElementById('container').appendChild(div);
}


