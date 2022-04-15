'use strict';

const formattingDigit = (digit) => `0${digit}`.slice(-2);

const updateTime = (time) => {
  const seconds = document.getElementById('seconds');
  const minutes = document.getElementById('minutes');
  const hours = document.getElementById('hours');
  const days = document.getElementById('days');

  const secondsAmount = time % 60;
  const minutesAmount = Math.floor((time % (60 * 60)) / 60);
  const hoursAmount = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  const daysAmount = Math.floor(time / (60 * 60 * 24));

  seconds.textContent = formattingDigit(secondsAmount);
  minutes.textContent = formattingDigit(minutesAmount);
  hours.textContent = formattingDigit(hoursAmount);
  days.textContent = formattingDigit(daysAmount);
}

const countdown = (time) => {
  const stopCounting = () => clearInterval(id);

  const counting = () => {
    if (time === 0) {
      stopCounting();
    }
    updateTime(time);
    time--;
  }
  const id = setInterval(counting, 1000);
}

const timeLeft = () => {
  const eventDate = new Date ('2022-05-15 22:00:00');
  const today = Date.now();
  return Math.floor((eventDate - today) / 1000);
}

countdown(timeLeft());