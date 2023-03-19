const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

function startRecognition(callbackFunction, lang = 'pt-Br', endless = true) {
  this.recognition.lang = lang;
  this.recognition.onresult = callbackFunction;
  this.recognition.continuous = true;
  this.recognition.start();
  // if (endless) {
  //   this.recognition.addEventListener('end', () => this.recognition.start());
  // }
}

const SpeechRecognitionController = {
  recognition: new SpeechRecognition(),
  startRecognition: startRecognition,
}

export {
  SpeechRecognitionController,
}