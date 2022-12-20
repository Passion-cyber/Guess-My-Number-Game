'use strict';
const againButton = document.querySelector('.again');
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const bodyEl = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
// number.textContent = secretNumber;

check.addEventListener('click', eventHandller);

function eventHandller() {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

//   When the User inputs Zero or an empty string
  if (!guess) {
    message.textContent = 'No Number ⛔';

//    When the User inputs the correct number 
  } else if (guess === secretNumber) {
    number.textContent = secretNumber;
    document.querySelector('.score').textContent = score;
    message.textContent = 'Correct Number 😍';
    bodyEl.style.background = '#60b347';
    number.style.width = '30rem';


    if (score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = score;
    }

//    When the User inputs a number greater than the secret number 

  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      message.textContent = 'Too High 📈';
    } else {
      message.textContent = 'You loose 💥';
      document.querySelector('.score').textContent = '0';
    }

//    When the User inputs a number lesser than the secret number 

  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      message.textContent = 'Too Low 📉';
    } else {
      message.textContent = 'You loose 💥';
      document.querySelector('.score').textContent = '0';
    }
  }
}

/* 
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

againButton.addEventListener('click', restartGame);

function restartGame() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
}
