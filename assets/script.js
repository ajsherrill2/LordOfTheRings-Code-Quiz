var startQuiz = document.querySelector('.start-quiz');

var timerEl = document.getElementById('timer');

// Timer that counts down from 100
function countDown() {
    var timeLeft = 100;

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = 'Time: ' + 0;
            clearInterval(timeInterval);
        }
    }, 1000);
};

startQuiz.addEventListener('click', function() {
    countDown()
});