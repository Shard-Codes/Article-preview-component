// Share box toggle
const shareIcon = document.querySelector('.share__icon'),
      shareBox = document.querySelector('.share__box');

shareIcon.addEventListener('click', () => {
  shareBox.classList.toggle('active');
})