'use strict';

const playerOneElement = document.querySelector('.player--0');
const playerTwoElement = document.querySelector('.player--1');
const scorePlayerOneElement = document.getElementById('score--0');
const scorePlayerTwoElement = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');

const newButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

const currentScorePlayerOneElement = document.getElementById('current--0');
const currentScorePlayerTwoElement = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;

const init = () => {
  diceElement.classList.add('hidden');
  playerOneElement.classList.add('player--active');
  playerTwoElement.classList.remove('player--active');
  playerOneElement.classList.remove('player--winner');
  playerTwoElement.classList.remove('player--winner');

  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  scorePlayerOneElement.textContent = 0;
  scorePlayerTwoElement.textContent = 0;
  currentScorePlayerOneElement.textContent = 0;
  currentScorePlayerTwoElement.textContent = 0;
}
const rollDice = () => Math.trunc(Math.random() * 6 + 1);

const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerOneElement.classList.toggle('player--active');
  playerTwoElement.classList.toggle('player--active');
}

init();

rollButton.onclick = () => {
  if (playing) {
    const dice = rollDice();
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
}

holdButton.onclick = () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    diceElement.classList.add('hidden');

    if (scores[activePlayer] >= 100) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    } else {
      switchPlayer();
    }
  }
}

newButton.onclick = init;