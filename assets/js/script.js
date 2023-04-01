/*jshint esversion: 6 */
import { questionsData } from './questions.js';

var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question-text");
var a_text = document.getElementById("a-text");
var b_text = document.getElementById("b-text");
var c_text = document.getElementById("c-text");
var d_text = document.getElementById("d-text");
var submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    var currentQuizData = questionsData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;

    });
}

function getSelected() {

    let answer;
        answerEls.forEach((answerEl) => {
            if(answerEl.checked) {
                answer = answerEl.id;
            }
        });
    return answer;
}

submitBtn.addEventListener("click", () => {
    var answer = getSelected();

    if(answer) {
        if(answer === questionsData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if(currentQuiz < questionsData.length) {
        loadQuiz();
        } else {
            quiz.innerHTML =`
            <h2> Well done!</h2>
            <h2> You answered ${score} out of ${questionsData.length} questions correctly.</h2>
            <button class="submit-btn" onclick="location.reload()">Reload Quiz</button>
            `;
        }
    }
});