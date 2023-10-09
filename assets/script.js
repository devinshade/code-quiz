/* 
WHEN I click the start button
THEN a timer starts and I am presented with a question
*/

// TODO: When I click the start button then a timer starts
const btnStart = document.getElementById("btn-start");
const timerEl = document.getElementById("timer");
const countdown = document.getElementById("counter")
const cards = [
    {
        question: "Commonly used data types DO Not Include:",
        choices: ["Strings", "Boolean", "Alerts", "Numbers"],
        answer:  "Alerts"
    },

    {
        question: "The condition in an if / else statement is enclosed with _______.",
        choices: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
        answer:  "Parenthesis"
    },

    {
        question: "Arrays in JavaScript can be used to store _______.",
        choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
        answer:  "All of the Above"
    },

    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        answer: "Quotes"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal/Bash", "for Loops", "console.log"],
        answer: "console.log"
    },
]


btnStart.addEventListener("click", () => {
    startQuiz(); // Call the startQuiz function when the button is clicked
});

function startQuiz() {
    console.log("GUMGUM");
    setTimeout(() => {
        console.log("Time expired!");
    }, 75000);

    var timerValue = 75;
    function updateCountdown() {
    const countdownEl = document.getElementById("timer");
    countdownEl.textContent = timerValue;
    --timerValue;

    if (timerValue < 0) {
        clearInterval(countdownInterval);
        countdownEl.textContent = "Failed - try again!"
    }
}

updateCountdown();

const countdownInterval = setInterval(updateCountdown, 1000)
}

// TODO: When I click the start button then I'm presented with a question