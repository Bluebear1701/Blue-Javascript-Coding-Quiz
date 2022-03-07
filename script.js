var timerEl = document.querySelector("#timer")
var questionsArr = document.querySelector("#questionsArr")
var button = document.querySelector("start-btn")
var index = 0;
//questions: "what is my name?", 
//choices: ["Lisa", "Tommy", "Monica"],
//answer: "Monica"

function start() {
    countdown()
    showquestion()

}
//countdowntimer set interval
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval)
        }
    }, 1000);
}

// questions
var questions = [
    "Which of the following is a valid type of function javascript supports?",
    "What is the HTML tag under which one can write the JavaScript code?",
    "A very useful tool for used during development and debugging for printing content to the debugger is:",
    "When being assigned to a variable, strings must be enclosed in what?",
]

var choices = [
    ["named function", "anonymous function", "none", "both"],
    ["<javascript>", "<js>", "<script>", "All of the Above"],
    ["parenthesis", "curly brackets", "quotes", "comma"],
    ["Javascript", "terminal / bash", "for loops", "console log"],    
]

var answers = [
    "both",
    "<script>" ,   
    "console log",
    "quotes",
]

function showquestion() {
    var question = questions[index]
    document.querySelector("#question").textContent = question;
    document.querySelector(".choice1").textContent = choices[0]
    document.querySelector(".choice2").textContent = choices[1]
    document.querySelector(".choice3").textContent = choices[2]
    document.querySelector(".choice4").textContent = choices[3]
}
function checkAnswer() {
    let question
}
<button onclick= "choices()"></button>
//if answers[0] =choice

//question array variable make sure syntax is right
// make sure questions and answers display after start button// make sure the for loop works 

// click handler 
document.querySelector(".start-btn").addEventListener("click", start);