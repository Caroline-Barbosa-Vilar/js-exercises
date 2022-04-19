'use strict';

const createItem = (task, status) => {
  const item = document.createElement('label');
  item.classList.add('to__do--item');
  item.innerHTML = `
  <input type="checkbox" ${status}>
  <div>${task}</div>
  <input type="button" value="X">
  `
  document.getElementById('toDolist').appendChild(item);
}