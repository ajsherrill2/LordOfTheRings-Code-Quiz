var startQuiz = document.querySelector('.start-quiz');

var timerEl = document.getElementById('timer');

// Shows Time as empty until the quiz has begun
timerEl.textContent = 'Time: ' + '';


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

    var hide = document.getElementById("intro");
    if (hide.style.display === "none") {
        hide.style.display = "block";
    } else {
        hide.style.display = "none";
    }
};

startQuiz.addEventListener('click', function() {
    countDown()
});