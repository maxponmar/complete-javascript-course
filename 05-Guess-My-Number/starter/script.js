'use strict';

document.querySelector('.message').onclick = () => console.log('first')
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 40