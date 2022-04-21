'use strict';

let storage = [];

const getStorage = () => JSON.parse(localStorage.getItem ('toDolist')) ?? [];
const setStorage = (storage) => localStorage.setItem('toDolist', JSON.stringify(storage));

const createItem = (task, status, index) => {
  const item = document.createElement('label');
  item.classList.add('to__do--item');
  item.innerHTML = `
    <input type="checkbox" ${status} data-index=${index}>
    <div>${task}</div>
    <input type="button" value="X" data-index=${index}>
  `;
  document.getElementById('toDolist').appendChild(item);
}

const eraseTask = () => {
  const toDolist = document.getElementById('toDolist');
  while (toDolist.firstChild) {
    toDolist.removeChild(toDolist.lastChild);
  }
}

const updateScreen = () => {
  eraseTask();
  const storage = getStorage();
  storage.forEach((item,index)  => createItem(item.task, item.status, index));
}

const addItem = (event) => {
  const key = event.key;
  const text = event.target.value;
  if (key === 'Enter') {
    const storage = getStorage();
    storage.push ({'task': text,'status': ''});
    setStorage(storage);
    updateScreen();
    event.target.value = '';
  }
}

const removeItem = (index) => {
  const storage = getStorage();
  storage.splice (index, 1);
  setStorage(storage);
  updateScreen();
}

const updateItem = (index) => {
  const storage = getStorage();
  storage[index].status = storage[index].status === '' ? 'checked' : '';
  setStorage(storage);
  updateScreen();
}

const clickItem = (event) => {
  const element = event.target;
  console.log (element.type);
  if (element.type === 'button') {
    const index = element.dataset.index;
    removeItem(index);
  } else if (element.type === 'checkbox') {
    const index = element.dataset.index;
    updateItem(index);
  }
}

document.getElementById('newItem').addEventListener('keypress', addItem);
document.getElementById('toDolist').addEventListener('click', clickItem);

updateScreen();