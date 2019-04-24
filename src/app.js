import scoreAnswer from './score-answer.js';

const maxResponse = document.getElementById('max-answer');
const countriesResponse = document.getElementById('countries-answer');
const coastResponse = document.getElementById('coast-answer');
const funResponse = document.getElementById('fun-answer'); 
const desertResponse = document.getElementById('desert-answer');
const quizResult = document.getElementById('quiz-results');
const submitButton = document.getElementById('submit-button')

submitButton.addEventListener('click', () => {
    const maxAnswer = maxResponse.value;
    const countriesAnswer = countriesResponse.value;
    const coastAnswer = coastResponse.value;
    const funAnswer = funResponse.value;
    const desertAnswer = desertResponse.value;

    const score = scoreAnswer(maxAnswer, countriesAnswer, coastAnswer, funAnswer, desertAnswer);

    const message = 'You got ' + score + '/5 correct.';

    quizResult.textContent = message;

    if (score < 2) {
        quizResult.classList.add('bad');
        quizResult.classList.remove('good');
    } else {
        quizResult.classList.add('good');
        quizResult.classList.remove('bad');
    }
});