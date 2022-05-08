'use strict';

const scoreZeroElement = document.getElementById('score--0');
const scoreOneElement = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');

scoreZeroElement.textContent = 0;
scoreOneElement.textContent = 0;
diceElement.classList.add('hidden');

let diceNumber = Math.trunc(Math.random() * 6 + 1);