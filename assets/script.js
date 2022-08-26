// Function and variables for starting the quiz and timer
var startQuiz = document.querySelector('.start-quiz');
var timerEl = document.getElementById('timer');
var revealQuestion = document.getElementById('question');
var recordScore = document.getElementById('score');
var hide = document.getElementById('intro');



startQuiz.addEventListener('click', function() {
    playGame()
});

// Shows Time as empty until the quiz has begun
timerEl.textContent = 'Time: ' + '';

// Globally scoped timer
var timeLeft = 100;
let timeInterval;

// Timer that counts down from 100
function playGame() {

    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else if (timeLeft <= 0) {
            timerEl.textContent = 'Time: ' + 0;
            gameOver();
        } else {
            timerEl.textContent = 'Time: ' + 0;
            clearInterval(timeInterval);
        }
    }, 1000);

    // hides the intro section after 'click'
    if (hide.style.display === 'none') {
        hide.style.display = 'block';
    } else {
        hide.style.display = 'none';
    }

    // Reveals the first question
    if (revealQuestion.style.display === 'none') {
        revealQuestion.style.display = 'flex';
    }

    nextQuestion()
  
};


var questions = [
    {
        questionNum: 'Question 1',
        question: 'Whose life force is bound to the One Ring?',
        choice1: "Gandalf the Grey's",
        choice2: "Sauron's",
        choice3: "Gimli's",
        choice4: "Frodo's",
        answer: "Sauron's",
    },
    {
        questionNum: 'Question 2',
        question: 'How many Rings of Power were given to the Kings of Men?',
        choice1: "1",
        choice2: "3",
        choice3: "7",
        choice4: "9",
        answer: "9",
    },
    {
        questionNum: 'Question 3',
        question: 'Where was the fellowship of the Ring formed?',
        choice1: "Rivendell",
        choice2: "Hobbiton",
        choice3: "Gondor",
        choice4: "Mordor",
        answer: "Rivendell",
    },
    {
        questionNum: 'Question 4',
        question: 'Where was the One Ring destroyed?',
        choice1: "The Lonely Mountain",
        choice2: "Minus Morgul",
        choice3: "Mount Doom",
        choice4: "Fangorn Forest",
        answer: "Mount Doom",
    },
]

var questionTitle = document.getElementById('question-num')
var questionText = document.getElementById('question-text');
var choiceA = document.getElementById('choice-a');
var choiceB = document.getElementById('choice-b');
var choiceC = document.getElementById('choice-c');
var choiceD = document.getElementById('choice-d');
var questionIndex = 0

function nextQuestion() {
    if (questionIndex < questions.length) {
        questionTitle.textContent = questions[questionIndex].questionNum;
        questionText.textContent = questions[questionIndex].question;
        choiceA.textContent = questions[questionIndex].choice1;
        choiceB.textContent = questions[questionIndex].choice2;
        choiceC.textContent = questions[questionIndex].choice3;
        choiceD.textContent = questions[questionIndex].choice4;
    } else {
        finalScore = timeLeft;
        clearInterval(timeInterval);
        gameOver();
    }
}

let finalScore;

choiceA.addEventListener('click', checkAnswer);
choiceB.addEventListener('click', checkAnswer);
choiceC.addEventListener('click', checkAnswer);
choiceD.addEventListener('click', checkAnswer);

function checkAnswer(e) {
    if (questions[questionIndex].answer === e.target.innerHTML) {
        questionIndex++;
        nextQuestion();
    } else {
        timeLeft -= 20;
        questionIndex++;
        nextQuestion();
    }  
}

function gameOver() {
    hide.style.display = 'none';
    revealQuestion.style.display = 'none';
    timerEl.style.display = 'none';
    recordScore.style.display = 'flex';
    scoreValue.innerText = finalScore;
    renderScores();
}

// variables for Scoreboard
var initials = document.querySelector('#player-initials');
var scoreForm = document.querySelector('#save-score');
var scoreboard = document.querySelector('#scoreboard');
var scoreValue = document.getElementById('score-value');

var allScores = [];

// Renders saved scores into scoreboard as <li> elements
function renderScores() {
    scoreboard.innerHTML = '';

    // Render a new li for each score
    for (var i = 0; i < allScores.length; i++) {
        var score = allScores[i];
        console.log(score);

        var li = document.createElement('li');
        li.textContent = score.initialsText + ': ' + score.finalScore;
        li.setAttribute('data-index', i);

        scoreboard.appendChild(li);
    }
}

function init() {
    // Gets stored scores from localStorage
    var storedScores = JSON.parse(localStorage.getItem('allScores'));

    // Updates scores to array if they were retrieved from localStorage
    if (storedScores !== null) {
        allScores = storedScores;
    }

    // Renders scores to the DOM
    // renderScores();
}

function storeScores() {
    localStorage.setItem('allScores', JSON.stringify(allScores));
}

scoreForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var initialsText = initials.value.trim();

    if (initialsText === '') {
        return;
    }

    let currentScore = {
        initialsText,
        finalScore,
    };

    allScores.unshift(currentScore);
    initials.value = '';

    console.log(allScores);

    storeScores();
    renderScores();
});

// Calls the inititial function
init()