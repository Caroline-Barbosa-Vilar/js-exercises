'use strict';

let storage = [
  {'task': 'Study JS', 'status': ''}
  {'task': 'Netflix', 'status': 'checked'}
]

const createItem = (task, status, index) => {
  const item = document.createElement('label');
  item.classList.add('to__do--item');
  item.innerHTML = `
  <input type="checkbox" ${status} data-index=${index}>
  <div>${task}</div>
  <input type="button" value="X" data-index=${index}>
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
  storage.forEach((item,index)  => createItem(item.task, item.status, index));
}
const addItem = (event) => {
  const key = event.key;
  const text = event.target.value
  if (key === 'Enter') {
    storage.push ({'task': text,'status': ''})
    updateScreen();
    event.target.value = '';
  }
}

const removeItem = (index) => {
  storage.splice (index,1);
  updateScreen();
}

const updateItem = (event) => {
  storage[index].status = storage[index].status === '' ? 'checked' : '';
  updateScreen();
}
const clickItem = (event) => {
  const element = event.target;
  if (element.type === 'button') {
    const index = element.dataset.indice;
    removeItem(index);
  } else if (element.type === 'checkbox'){
    const index = element.dataset.indice;
    updateItem(index);
  }
}

document.getElementById('newItem').addEventListener('keypress',addItem);
document.getElementById('toDolist').addEventListener('click', clickItem);
updateScreen();