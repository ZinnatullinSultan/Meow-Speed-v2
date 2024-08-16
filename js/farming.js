document.addEventListener('DOMContentLoaded', () => {
  
  const repairBtn = document.querySelector('.farm-card__button--repair');
  const foodBtn = document.querySelector('.farm-card__button--food');
  const updateBtn = document.querySelector('.farm-card__btn--medium');

  const popup = document.querySelector('.popup-farming');
  const closeBtn = document.querySelector('.popup-farming__btn');
  const tapeTop = document.querySelector('.popup-farming__img--first');
  const tapeBottom = document.querySelector('.popup-farming__img--second');

  repairBtn.addEventListener('click', () => {
    popup.classList.add('popup-farming--active');
  });
  foodBtn.addEventListener('click', () => {
    popup.classList.add('popup-farming--active');
  });
  updateBtn.addEventListener('click', () => {
    popup.classList.add('popup-farming--active');
  });

  closeBtn.addEventListener('click', () => {
    tapeTop.classList.add('popup-farming-tape-1-animate-return');
    tapeBottom.classList.add('popup-farming-tape-2-animate-return');
    popup.classList.remove('popup-farming--active');
  });
});
