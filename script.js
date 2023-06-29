const quizData = [
    {
        question: 'What country has the highest life expectancy?',
        a: 'Hong Kong',
        b: 'Rome',
        c: 'Paris',
        d: 'London',
        correct: 'a'
    }, {
        question: 'What car manufacturer had the highest revenue in 2020? Volkswagen?',
        a: 'Ford',
        b: 'BMW',
        c: 'Volkswagen',
        d: 'Mercedes',
        correct: 'c'
    }, {
        question: 'What country has won the most World Cups?',
        a: 'Italy',
        b: 'Brasil',
        c: 'Tunisia',
        d: 'Japon',
        correct: 'b'
    }, {
        question: 'Who famously crossed the Alps with elephants on the way to war with the Romans? Hannibal?',
        a: 'Hannibal',
        b: 'Alexander the Great',
        c: 'Napoleon',
        d: 'Ataturk',
        correct: 'a'
    }, {
        question: 'In what country is the Chernobyl nuclear plant located?',
        a: 'Russia',
        b: 'USA',
        c: 'Iran',
        d: 'Ukraine',
        correct: 'd'
    }, {
        question: 'What software company is headquartered in Redmond, Washington?',
        a: 'Google',
        b: ' Microsoft',
        c: 'Adobe',
        d: 'Oracle',
        correct: 'b'
    }, {
        question: 'What is the largest Spanish-speaking city in the world?',
        a: 'Buenos Aires',
        b: 'Madrid',
        c: 'Mexico City',
        d: 'Havana',
        correct: 'c'
    }, {
        question: 'How many bones do we have in an ear?',
        a: '3',
        b: '2',
        c: '4',
        d: '1',
        correct: 'a'
    }, {
        question: 'Which planet in the Milky Way is the hottest?',
        a: 'Mars',
        b: 'Jupiter',
        c: 'Mercury',
        d: 'Venus',
        correct: 'd'
    }, {
        question: 'Who was the Ancient Greek God of the Sun?',
        a: 'Hephaestus',
        b: 'Apollo',
        c: 'Zeus',
        d: 'Artemis',
        correct: 'b'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
         answerEl.checked  = false;
        });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer){
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
         } else {
             //Score
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Reload</button>`;
         }
    }
   
});