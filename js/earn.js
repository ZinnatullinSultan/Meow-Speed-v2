document.addEventListener('DOMContentLoaded', () => {

  const dailyButton = document.querySelector('.section-earn__btn--daily');
  const speedButton = document.querySelector('.section-earn__btn--speed');

  // Функция для переключения секций
  function showSection(sectionToShow) {
    if (sectionToShow === 'daily') {
      dailyButton.classList.add('section__btn--active');
      speedButton.classList.remove('section__btn--active');
    } else if (sectionToShow === 'speed') {
      dailyButton.classList.remove('section__btn--active');
      speedButton.classList.add('section__btn--active');
    }
  }

  showSection('daily');
  dailyButton.addEventListener('click', function() {
    showSection('daily');
  });
  speedButton.addEventListener('click', function() {
    showSection('speed');
  });

  //popups
  const popup1 = document.querySelector('.popup-today');
  const popup2 = document.querySelector('.popup-special');
  const popup3 = document.querySelector('.popup-meow');

  const close = document.querySelectorAll('.popup__close');
  
  const todayButtons = document.querySelectorAll('.task__button--today');
  const specialsButtons = document.querySelectorAll('.task__button--special');
  const meowButtons = document.querySelectorAll('.task__button--meow');

  todayButtons.forEach(button => {
    if (!button.classList.contains('task__button--disabled')) {
      button.addEventListener('click', function() {
        popup1.classList.add('popup-earn--active');
      });
    }
  });
  close[0].addEventListener('click', function() {
    popup1.classList.remove('popup-earn--active');
  });

  specialsButtons.forEach(button => {
    if (!button.classList.contains('task__button--disabled')) {
      button.addEventListener('click', function() {
        popup2.classList.add('popup-earn--active');
      });
    }
  });
  close[1].addEventListener('click', function() {
    popup2.classList.remove('popup-earn--active');
  });

  meowButtons.forEach(button => {
    if (!button.classList.contains('task__button--disabled')) {
      button.addEventListener('click', function() {
        popup3.classList.add('popup-earn--active');
      });
    }
  });
  close[2].addEventListener('click', function() {
    popup3.classList.remove('popup-earn--active');
  });
});
