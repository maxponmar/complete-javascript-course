'use strict';

const scorePlayerOneElement = document.getElementById('score--0');
const scorePlayerTwoElement = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');

const newButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

const currentScorePlayerOneElement = document.getElementById('current--0');
const currentScorePlayerTwoElement = document.getElementById('current--1');

scorePlayerOneElement.textContent = 0;
scorePlayerTwoElement.textContent = 0;
diceElement.classList.add('hidden');

const rollDice = () => Math.trunc(Math.random() * 6 + 1);

let currentScore = 0;

rollButton.onclick = () => {
  const dice = rollDice();
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    currentScorePlayerOneElement.textContent = currentScore;
  } else {
    currentScore = 0;
    currentScorePlayerOneElement.textContent = 0;
  }
}