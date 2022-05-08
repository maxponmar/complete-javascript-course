'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener('click', () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = 'No Number!'
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number!'
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = '35rem';
    score++;
    document.querySelector('.score').textContent = score;
    highscore = highscore > score ? score : highscore;
    document.querySelector('.highscore').textContent = highscore;
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose the Game :(';
      document.querySelector('.score').textContent = score;
    }
  }
})

document.querySelector('.again').onclick = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector(".number").textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;
  document.querySelector("body").style.backgroundColor = "#222";
}