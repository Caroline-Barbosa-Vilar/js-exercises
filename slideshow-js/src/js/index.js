'use strict';

const images = [
  {'id': '1', 'url':'./src/img/casa1.png'},
  {'id': '2', 'url':'./src/img/casa2.jpg'},
  {'id': '3', 'url':'./src/img/casa5.jpg'},
  {'id': '4', 'url':'./src/img/hause.jpg'},
  {'id': '5', 'url':'./src/img/hause2.jpg'},
]

const containerItems = document.querySelector('#container__items');

const loadImages = (images, container) => {
  images.forEach(image => {
    container.innerHTML += `
      <div class='item'>
        <img src='${image.url}'></img>
      </div> `
  })
}
loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll('.item');
}

const next = () => {
  const lastItem = items[items.length -1];
  containerItems.insertBefore(lastItem,items[0]);
  items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
