'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const showModal = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

btnsOpenModal.forEach((btn) => {
  btn.onclick = showModal;
});

btnCloseModal.onclick = closeModal;
overlay.onclick = closeModal;

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
})