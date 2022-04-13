'use strict';

const images = [
  {'id': '1', 'url':'./src/img/casa1.png'},
  {'id': '2', 'url':'./src/img/casa2.jpg'},
  {'id': '3', 'url':'./src/img/casa5.jpg'},
]

const container = document.querySelector('#container__items');

const loadImages = (images, container) => {
  images.forEach(image => {
    container.innerHTML += `
      <div class='item'>
        <img src='${image.url}'></img>
      </div> `
  })
}
loadImages(images, container);