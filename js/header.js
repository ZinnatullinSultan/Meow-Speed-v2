document.addEventListener('DOMContentLoaded', () => {
  const changeLang = document.querySelector('.header__lang');
  const curLang = document.querySelector('.current-lang');
  changeLang.addEventListener('click', () => {
    curLang.classList.toggle('current-lang--active');
  });
});