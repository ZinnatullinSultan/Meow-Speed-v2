document.addEventListener('DOMContentLoaded', () => {
  //buttons
  const nftButton = document.querySelector('.section-airdrop__btn--nft');
  const tokenButton = document.querySelector(
    '.section-airdrop__btn--token'
  );

  const nftSection = document.querySelector('.nft');
  const tokenSection = document.querySelector('.token');

  // Функция для переключения секций
  function showSection(sectionToShow) {
    if (sectionToShow === 'nft') {
      nftSection.classList.remove('hidden');
      tokenSection.classList.add('hidden');
      nftButton.classList.add('section__btn-nft--active');
      tokenButton.classList.remove('section__btn-token--active');
    } else if (sectionToShow === 'token') {
      nftSection.classList.add('hidden');
      tokenSection.classList.remove('hidden');
      nftButton.classList.remove('section__btn-nft--active');
      tokenButton.classList.add('section__btn-token--active');
    }
  }

  showSection('nft');
  nftButton.addEventListener('click', function () {
    showSection('nft');
  });
  tokenButton.addEventListener('click', function () {
    showSection('token');
  });

});
