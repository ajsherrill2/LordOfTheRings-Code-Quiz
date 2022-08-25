// Function and variables for starting the quiz and timer
var startQuiz = document.querySelector('.start-quiz');
var timerEl = document.getElementById('timer');

startQuiz.addEventListener('click', function() {
    playGame()
});

// Shows Time as empty until the quiz has begun
timerEl.textContent = 'Time: ' + '';

// Globally scoped timer
var timeLeft = 100;

// Timer that counts down from 100
function playGame() {

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = 'Time: ' + 0;
            clearInterval(timeInterval);
        }
    }, 1000);

    // hides the intro section after 'click'
    var hide = document.getElementById('intro');
    if (hide.style.display === 'none') {
        hide.style.display = 'block';
    } else {
        hide.style.display = 'none';
    }

    var revealQuestion = document.getElementById('question');
    if (revealQuestion.style.display === 'none') {
        revealQuestion.style.display = 'flex';
    }

    var timesUp

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
    questionTitle.textContent = questions[questionIndex].questionNum;
    questionText.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choice1
    choiceB.textContent = questions[questionIndex].choice2
    choiceC.textContent = questions[questionIndex].choice3
    choiceD.textContent = questions[questionIndex].choice4
}

choiceA.addEventListener('click', checkAnswer);
choiceB.addEventListener('click', checkAnswer);
choiceC.addEventListener('click', checkAnswer);
choiceD.addEventListener('click', checkAnswer);

function checkAnswer(e) {
    if (questions[questionIndex].answer === e.target.innerHTML) {
        questionIndex++;
        nextQuestion();
    } else {
        timeLeft -= 10;
        // finalScore --;
        questionIndex++;
        nextQuestion();
    }
   
}