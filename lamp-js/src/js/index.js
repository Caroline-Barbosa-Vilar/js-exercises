const turnOnOff = document.getElementById ('turnOnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken () {
  return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
  if (!isLampBroken () ) {
    lamp.src = './src/img/ligada.jpg';
  }
}

function lampOff () {
  if (!isLampBroken () ) {
    lamp.src = './src/img/desligada.jpg';
  }
}

function lampBroken () {
  lamp.src= './src/img/quebrada.jpg';
}

function lampOnOff () {
  if (turnOnOff.textContent == 'Turn on') {
    lampOn();
    turnOnOff.textContent = 'Turn off';
  } else {
    lampOff();
    turnOff.textContent = 'Turn on';
  }
}

turnOnOff.addEventListener ('click', lampOnOff);
lamp.addEventListener ('dblclick', lampBroken);