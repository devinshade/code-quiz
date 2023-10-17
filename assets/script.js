/* 
WHEN I click the start button
THEN a timer starts and I am presented with a question
*/

const btnStart = document.getElementById("btn-start");
const timerEl = document.getElementById("timer");
const countdown = document.getElementById("counter");
const items = document.getElementById("items");
const quizCards = document.getElementById("card");
const cardTitle = document.getElementById("card-title")
const answers = document.getElementById("answers")
const currentIndex = 0;
const cards = [
    {
        question: "Commonly used data types DO Not Include:",
        choices: ["1. Strings", "2. Boolean", "3. Alerts", "4. Numbers"],
        answer:  "Alerts"
    },

    {
        question: "The condition in an if / else statement is enclosed with _______.",
        choices: ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
        answer:  "Parenthesis"
    },

    {
        question: "Arrays in JavaScript can be used to store _______.",
        choices: ["1. Numbers and Strings", "2. Other Arrays", "3. Booleans", "4. All of the Above"],
        answer:  "All of the Above"
    },

    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
        answer: "Quotes"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. Terminal/Bash", "3. for Loops", "4. console.log"],
        answer: "console.log"
    },
];

// ! TODO: When I click the start button then a timer starts

btnStart.addEventListener("click", () => {
    startQuiz(); // Call the startQuiz function when the button is clicked
    console.log("GUMMY")
    next = cards[currentIndex]
    console.log(next.question)
    displayQuestion(next);
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
        countdownEl.textContent = "Failed - try again!";
    }
}

updateCountdown();

const countdownInterval = setInterval(updateCountdown, 1000);
}

// TODO: When I click the start button then I'm presented with a question



function displayQuestion(question) {
    cardTitle.innerText = question.question;
    question.choices.forEach(element => {
        var button = document.getElementById("items")
        const answersEl = document.getElementById("answers")
        answersEl.innerText = element;
        // var button = document.getElementById("answers");
        // button.className = "btn-next";
        // answers.innerText = element
        // answersEl.appendChild(answers)
        // button.addEventListener("click", displayNext)
    });
}

// // ! TODO: FOR TOMORROW - add displayNext function
// function displayNext(e) {
//     if (currentIndex < cards.length -1) {
//         ++currentIndex;
//     } else {
//         currentIndex = 0;
//     }

//         correction(e.target.innerText == cards[currentIndex].answer);
//         answers.innerHTML = "" ;
//         displayQuestion(cards[currentIndex]);
// }
