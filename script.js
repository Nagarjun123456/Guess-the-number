'use strict';

// DOM manipulation
// document.querySelector is used to select a particular block from the
// HTML content and the .textContent is used to retrieve the
// text content form the block

// DOM is connection point between HTML and Javascript

/*

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 23;

*/

// addEventListener method is used to perform a specific task on the end of
// an event example: on a mouse click

const scores = [];

var secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  score = score - 1;
  document.querySelector('.score').textContent = score;
  if (score == 0) {
    document.querySelector('.message').textContent = 'You Lost the game!!';
  }
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = '❌No number given';
    } else if (guess == secretNumber) {
      document.querySelector('.message').textContent = '🎉Correct number';

      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      scores.push(score);
      document.querySelector('.highscore').textContent = Math.max(...scores);
      // Changing styles using .style attribute in DOM
      // Everything should be given in string format for CSS DOM
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈Too High';
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉Too Low';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.guess').value = '';

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
