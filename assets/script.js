// Globally scoped variables
var startQuiz = document.querySelector('.start-quiz');
var timerEl = document.getElementById('timer');
var revealQuestion = document.getElementById('question');
var recordScore = document.getElementById('score');
var hide = document.getElementById('intro');


// Adds click event to 'Start Quiz' button
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
            timerEl.textContent = 'Time: ' + 0; // If timer reaches Zero then the gameOver() function is executed
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

// Object Variable for questions container content
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

// Globally scoped variables for nextQuestion() function
var questionTitle = document.getElementById('question-num')
var questionText = document.getElementById('question-text');
var choiceA = document.getElementById('choice-a');
var choiceB = document.getElementById('choice-b');
var choiceC = document.getElementById('choice-c');
var choiceD = document.getElementById('choice-d');
var questionIndex = 0

// This function adds content to an array for question boxes
function nextQuestion() {
    if (questionIndex < questions.length) {
        questionTitle.textContent = questions[questionIndex].questionNum;
        questionText.textContent = questions[questionIndex].question;
        choiceA.textContent = questions[questionIndex].choice1;
        choiceB.textContent = questions[questionIndex].choice2;
        choiceC.textContent = questions[questionIndex].choice3;
        choiceD.textContent = questions[questionIndex].choice4;
    } else { // Stops timer after last question and executes gameOver() function
        finalScore = timeLeft; 
        clearInterval(timeInterval);
        gameOver();
    }
}

let finalScore;


// Click Events for each button that then run checkAnswer() function
choiceA.addEventListener('click', checkAnswer);
choiceB.addEventListener('click', checkAnswer);
choiceC.addEventListener('click', checkAnswer);
choiceD.addEventListener('click', checkAnswer);

// Checks if answer is true and if not subtracts 20 seconds from time left
// executes nextQuestion() function
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

// Hides Intro, Questions, and timer
// Displays recorded score and executes renderScore() function
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


        // Creates new li with intitials and attached score
        var li = document.createElement('li');
        li.textContent = score.initialsText.toUpperCase() + ': ' + score.finalScore;
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
}

// Stingifies all scores to localStorage
function storeScores() {
    localStorage.setItem('allScores', JSON.stringify(allScores));
}

// Submit event that pastes each score before the last and executes storeScores() and renderScores()
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