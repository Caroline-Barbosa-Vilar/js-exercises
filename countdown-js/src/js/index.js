'use strict';

const countdown = (time) => {
  const stopCounting = () => clearInterval(id);

  const counting = () => {
    if (time == 0) {
      stopCounting();
    }
    time--;
  }
  const id = setInterval(counting, 1000);
}
countdown(5);