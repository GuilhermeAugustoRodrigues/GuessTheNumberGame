import { sortNumber } from './app/numberSorter.js'
import { SpeechRecognitionController } from './app/speechRecognition.js'
import { validate } from './app/guessValidation.js'

const MIN_VALUE = 0;
const MAX_VALUE = 1000;
const guessElement = document.getElementById('guess');

const TARGET_NUMBER = sortNumber(MIN_VALUE, MAX_VALUE);

console.log(TARGET_NUMBER);

SpeechRecognitionController.startRecognition(onSpeak);

function onSpeak (event) {
  const { results } = event;
  const value = results.item(results.length - 1)[0].transcript;
  let error = validate(value, MAX_VALUE, MIN_VALUE);
  if (+value === TARGET_NUMBER) {
    displayWinningScreen(TARGET_NUMBER);
  } else {
    displayGuessOnElement(value, TARGET_NUMBER, error);
  }
}

function displayGuessOnElement(guess, target, error) {
  guessElement.innerHTML = getValueDiv(guess) + getResultDiv(guess, target, error);
}

function getValueDiv(value) {
  return `
    <div>You said:</div>
    <div class="box">${value}</div>
  `;
}

function getResultDiv(guess, target, error) {
  if (error) {
    return `<div>${error}</div>`;
  }
  if (guess > target) {
    return `<div>The secret number is lower <i class="fa-solid fa-arrow-down"></i></div>`
  }
  return `<div>The secret number is higher <i class="fa-solid fa-arrow-up"></i></div>`;
}

function displayWinningScreen(value) {
  document.body.innerHTML = `
    <h2>You won!</h2>
    <h3>The secret number was: ${value}</h3>
    <button id='restart' class='btn_restart'>Play again</button>
  `;

  const restartButtonElement = document.getElementById('restart');
  restartButtonElement.onclick = () => {
    window.location.reload()
  };
}

updateHTMLValues(MIN_VALUE, MAX_VALUE);

function updateHTMLValues (lowerValue, higherValue) {
  const lowerValueElement = document.getElementById('lower-value');
  const higherValueElement = document.getElementById('higher-value');
  lowerValueElement.innerHTML = lowerValue;
  higherValueElement.innerHTML = higherValue;
}
