'use strict';

// document.querySelector('.message').onclick = () => console.log('first')
// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!'
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 40

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

let score = 20;

document.querySelector(".check").addEventListener('click', () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = 'No Number!'
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!'
    score++;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose the Game :(';
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose the Game :(';
      document.querySelector('.score').textContent = score;
    }
  }
})