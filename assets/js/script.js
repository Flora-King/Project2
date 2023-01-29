/*jshint esversion: 6 */

var questionsData = [
    {
        question: "How many players are in a cricket team?",
        a:"8",
        b:"9",
        c:"10",
        d:"11",
        correct:"d",
    },
    {
        question: "Who was the 40th President of the United States?",
        a:"Franklin D. Roosevelt",
        b:"Ronald Reagan",
        c:"Bill Clinton",
        d:"George W. Bush",
        correct:"a",
    },
    {
        question: "What is the name of the dog in Tintin?",
        a:"Snowy",
        b: "Flakes",
        c: "Dottie",
        d: "Luna",
        correct: "a",
    },
    {
        question: "How many sides has a Hexagon?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "b",
    },
    {
        question: "When did Salt Lake City host the Winter Olympics?",
        a: "1992",
        b: "1998",
        c: "2002",
        d: "2008",
        correct: "c",
    },
    {
        question: "Who is the CEO of Amazon?",
        a: "Elon Musk",
        b: "Tim Cook",
        c: "Mark Zuckerberg",
        d: "Andy Jassy",
        correct: "d",
    },
    {
        question: "In The Lion King, who is Simba’s uncle?",
        a: "Mufasa",
        b: "Scar",
        c: "Timon",
        d: "Zazu",
        correct: "b",
    },
    {
        question: "Which one of the following is the correct spelling?",
        a: "Mantenance",
        b: "Maintenance",
        c: "Miantenance",
        d: "Maintenence",
        correct: "b",
    },
    {
        question: "How many elements are there on the periodic table?",
        a: "58",
        b: "78",
        c: "98",
        d: "118",
        correct: "d",
    },
    {
        question: "If you are born on the 1st of January, which star sign are you?",
        a: "Scorpio",
        b: "Carpricorn",
        c: "Libra",
        d: "Aries",
        correct: "b",
    },
    {
        question: "What does the Richter scale measure?",
        a: "Wind Speed",
        b: "Temperature",
        c: "Tornado Strength",
        d: "Earthquake intensity",
        correct: "d",
    },
    {
        question: "What’s Garfield favourite food?",
        a: "Pizza",
        b: "Lasagna",
        c: "Burger",
        d: "Sandwich",
        correct: "b",
    },
    {
        question: "Which chemical element has Ag as a symbol?",
        a: "Gold",
        b: "Silver",
        c: "Iron",
        d: "Carbon",
        correct: "b",
    },
    {
        question: "Who painted ‘Girl with a Pearl Earring’?",
        a: "Johannes Vermeer",
        b: "Vincent Van Gogh",
        c: "Leonardo da Vinci",
        d: "Sandro Botticelli",
        correct: "a",
    },
    {
        question: "Which Nobel Prize did Winston Churchill win?",
        a: "Literature",
        b: "Peace",
        c: "Chemistry",
        d: "Physics",
        correct: "a",
    },
];

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
            <h2> You answered ${score} out of ${questionsData.length} questions correctly.</h2>
            <button class="submit-btn" onclick="location.reload()">Reload Quiz</button>
            `;
        }
    }
});