var timerEl = document.querySelector("#timer")
var questionsArr = document.querySelector("#questionsArr")
var button = document.querySelector("start-btn")
var index= 0;
//questions: "what is my name?", 
//choices: ["Lisa", "Tommy", "Monica"],
//answer: "Monica"

function start() {
    countdown ()
    showquestion ()

}
//countdowntimer set interval
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {        
        timeLeft--;
        timerEl.textContent = timeLeft;
        if(timeLeft === 0) {
            clearInterval(timeInterval)
        } 
    }, 1000);
}

// questions
var questions= [
    "what",
  "how",
    "who",
]

var choices=[
    "a", "b", "c", "d",
]

var answers=[
    "monica"
]
function showquestion(){
    var question =questions [index]
    document.querySelector("#question").textContent= question;
    document.querySelector(".choice1").textContent= choices [0]
    document.querySelector(".choice2").textContent= choices [1]
    document.querySelector(".choice3").textContent= choices [2]
    document.querySelector(".choice4").textContent= choices [3]
    
}

// if answers[0] =choice
// choices display choices
//question array variable make sure syntax is right
// make sure questions and answers display after start button
// make sure the for loop works 

// click handler 
document.querySelector(".start-btn").addEventListener("click", start);