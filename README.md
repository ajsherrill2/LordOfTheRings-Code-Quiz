# <Lord-of-the-Rings-Quiz>

 ### This project is the best

## Description

In this projet I was tasked with creating a quiz starting from scratch by writing and HTML file, CSS file, and a Javascript file. The onjective of this application is to begin a timer once the player clicks the Start Quiz button, the players score is based on the time remaining and if an incorrect selection is made 20 seconds is subtracted from the time. Upon completion the player will be aloud to save their score by typing in their intitials.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## Installation

Steps include:

Creating a repository to GitHub and filling this repository with a standard structure of files and folders. In this case adding an "assets" folder housing a CSS, JS file and images, and within the root of this repository is the HTML file and Readme document.

Starting with the HTML we must first structure a page with head and body tags inside the head tags we link external files such as our CSS. Within the body tag we link our JS file at the bottom.

I then go onto designing a semantic layout that will be simple enough to style later on.

I have a header tag including a timer. I also have a main tag housing a section that includes the instructions of the quiz and a start button, a section that includes empty elements for questions and answer choices to be added via Java, and a section including players score and a form to save score.

After writing the HTML, next I add styles via element, class, and ID selectors within my linked CSS file. Styles include a dark theme, tangerine font, styles for buttons and a flex box layout.

Post completion of my CSS file, I then move onto writing a function within my JS file for the "Start Quiz" button. This function incorperates a time interval method in order to start the timer on the html page to countdown from 100, this button also hides the intro box and adds content to a question box that is then displayed.

The previous function is calling a nextQuestion() function, in more detail, this function takes contect from a object array and adds it to the empty elements written within the inner HTML.

I then add a event listener to the answer choices that uses a check answer function in order to deterime if answer is correct or incorrect, so that my application knows whether to subtract time off the clock, included in this event listener is the previous nextQuestion() function so that after players selection a new question replaces the old one.

Within my start quiz function I write a conditional statement that will stop the timer at zero and end the quiz once said time is reached initiating the game over function, also within the nextQuestion() function I write a conditional statement that stops the timer when the last question is answered and initiates the same game over function.

The game over function includes stoping the timer interval, hiding the display of every section in the html and displaying the scoreboard section in the HTML. I linked to this page the frozen time to appear with "Your score:" and also wrote a function to intitially render the scores from previous players to appear on the score board using a JSON.parse() method.

Finally I wrote a function to store the players new score and the input of the players score adding the collected string to the scoreboard but most importantly saving the information to local storage.

## Usage

You can find the new live application at https://ajsherrill2.github.io/LordOfTheRings-Code-Quiz/

<img src=".\assets\images\Lord-of-the-Rings-Quiz.gif">

Once inside the application the user will be able to read the instructions and click start quiz whenever they are ready.

After starting the user has 100 seconds to answer four questions, if the choice selected is incorrect then the player loses 20 seconds from the clock.

Once all questions are answered or time runs out the player will see their new score and be able to insert their initials in order to save it to the scoreboard.


## Credits

Collaborators:

Shelby Hernandez - https://github.com/Shernandez927

Tomas Dias - https://github.com/tomasdiaz83

Shawn Tschoepe - UT Coding Bootcamp TA
