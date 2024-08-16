document.addEventListener('DOMContentLoaded', () => {
  //buttons
  const inviteButton = document.querySelector('.section-friends__btn--invite');
  const leaderButton = document.querySelector(
    '.section-friends__btn--leaderboard'
  );

  const inviteSection = document.querySelector('.invite');
  const leaderSection = document.querySelector('.leader');

  // Функция для переключения секций
  function showSection(sectionToShow) {
    if (sectionToShow === 'invite') {
      inviteSection.classList.remove('hidden');
      leaderSection.classList.add('hidden');
      inviteButton.classList.add('section__btn--active');
      leaderButton.classList.remove('section__btn--active');
    } else if (sectionToShow === 'leaderBoard') {
      inviteSection.classList.add('hidden');
      leaderSection.classList.remove('hidden');
      inviteButton.classList.remove('section__btn--active');
      leaderButton.classList.add('section__btn--active');
    }
  }

  showSection('invite');
  inviteButton.addEventListener('click', function () {
    showSection('invite');
  });
  leaderButton.addEventListener('click', function () {
    showSection('leaderBoard');
  });

  //popup
  const popup = document.querySelector('.popup-friends');
  const closeBtn = document.querySelector('.popup__close');
  const openBtn= document.querySelector('.flag-invite__front');
  openBtn.addEventListener('click', function() {
    popup.classList.add('popup-friends--active');
  });
  closeBtn.addEventListener('click', function() {
    popup.classList.remove('popup-friends--active');
  })
});
