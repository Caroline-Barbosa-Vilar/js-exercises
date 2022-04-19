'use strict';

let storage = [
  {'task': 'Study JS', 'status': ''}
  {'task': 'Netflix', 'status': 'checked'}
]

const createItem = (task, status = '') => {
  const item = document.createElement('label');
  item.classList.add('to__do--item');
  item.innerHTML = `
  <input type="checkbox" ${status}>
  <div>${task}</div>
  <input type="button" value="X">
  `
  document.getElementById('toDolist').appendChild(item);
}

const eraseTask = () => {
  const toDolist = document.getElementById('toDolist');
  while (toDolist.firstChild) {
    toDolist.removeChild(toDolist.lastChild)
  }
}
const updateScreen = () => {
  eraseTask()
  storage.forEach(item => createItem(item.task, item.status));
}
updateScreen();