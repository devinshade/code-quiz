// v.2 post-bootcamp js
// define dom elements
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answer-btns");
const startContainer = document.getElementById("start-container");
const startDiv = document.getElementById("start");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const resultDiv = document.getElementById("result");
const finalContainer = document.getElementById("final-container");
const scoreboard = document.getElementById("scoreboard");
const highScoreButton = document.getElementById("hs-btn");
const countdown = document.getElementById("countdown");
const returnBtn = document.getElementById("return-btn");
const leaderboardDiv = document.getElementById("leaderboard")

let shuffledQuestions, currentQuestionsIndex, score;

const questions = [
    {
        question: "Commonly used data types DO Not Include:",
        answers: [
            {text: "Strings", correct: false},
            {text: "Boolean", correct: false},
            {text: "Alerts", correct: true},
            {text: "Numbers", correct: false},
        ],
    },
    {
        question: "The condition in an if / else statement is enclosed with _______.",
        answers: [
            {text: "Quotes", correct: false},
            {text: "Curly Brackets", correct: false},
            {text: "Parenthesis", correct: true},
            {text: "Square Brackets", correct: false},
        ],
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answers: [
            {text: "Numbers and Strings", correct: false},
            {text: "Other Arrays", correct: false},
            {text: "Booleans", correct: false},
            {text: "All of the Above", correct: true},
        ],
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: [
            {text: "Quotes", correct: true},
            {text: "Commas", correct: false},
            {text: "Curly Brackets", correct: false},
            {text: "Parenthesis", correct: false},
        ],
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: "JavaScript", correct: false},
            {text: "Terminal/Bash", correct: false},
            {text: "for Loops", correct: false},
            {text: "console.log", correct: true},
        ],
    },
];

startState();

function startState() {
    startContainer.style.display = "flex";
    questionContainer.style.display = "none";
    finalContainer.style.display = "none";
    scoreboard.style.display = "none";
    highScoreButton.classList.remove("hide");
    countdown.classList.add("hide");
    nextBtn.classList.add("hide");
    restartBtn.classList.add("hide");
    startDiv.classList.remove("hide");
    startBtn.classList.remove("hide");
};

// add start button eventListener to start timer and switch to questions
startBtn.addEventListener("click", () => {
    startBtn.classList.add("hide");
    startQuiz(); // Call the startQuiz function when the button is clicked
    console.log("Quiz started");
});

function startQuiz() {
    score = 0;
    questionContainer.style.display = "flex";
    startContainer.style.display = "none";
    finalContainer.style.display = "none";
    scoreboard.style.display = "none";
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionsIndex = 0;
    countdown.classList.remove("hide");
    nextBtn.classList.remove("hide");
    highScoreButton.classList.add("hide");
    restartBtn.classList.add("hide");
    resultDiv.classList.add("hide");
    startDiv.classList.add("hide");
    setTimeout(() => {
        console.log("Time expired!")
    }, 75000);

    setNextQuestion();

var timerValue = 75;
function updateCountdown() {
    const countdownEl = document.getElementById("timer");
    countdownEl.textContent = timerValue
    --timerValue;
    
    if (timerValue < 0) {
        clearInterval(countdownInterval);
        countdownEl.textContent = "Failed - try again!";
    }
    
    if (currentQuestionsIndex >= questions.length - 1 || answerBtns.answers === true) {
        stopTimer();
    }

    // if (answerBtns.answers === false) {
    //     setInterval(countdownInterval, 500);    }
}

function stopTimer() {
    clearInterval(countdownInterval);
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

// ! BUGS
// todo: decrement time by 10sec for wrong answers
// function decreaseByTen() {
//     for (let i=0; i < answerBtns.answers; ++i) {
//         if (answerBtns.answers[i].selected) {
//             --countdownInterval;
//         }
//         setInterval(countdownInterval, 500);
//     }
// }

};

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionsIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const inputGroup = document.createElement("div");
        inputGroup.classList.add("input-group");

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.id = "answer" + index;
        radio.name = "answer";
        radio.value = index;

        const label = document.createElement("label");
        label.htmlFor = "answer" + index;
        label.innerText = answer.text;

        inputGroup.appendChild(radio);
        inputGroup.appendChild(label);
        answerBtns.appendChild(inputGroup);
    });
}

function resetState() {
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

nextBtn.addEventListener("click", () => {
    const answerIndex = Array.from(
        answerBtns.querySelectorAll("input")
        ).findIndex((radio) => radio.checked)
        if (answerIndex !== -1) {
            if(shuffledQuestions[currentQuestionsIndex].answers[answerIndex].
                correct) {
                score++;
                }
                currentQuestionsIndex++;
                if(shuffledQuestions.length > currentQuestionsIndex) {
                    setNextQuestion();
                } else {
                    endQuiz();
                }
        } else {
            alert("Please select an answer.")
        }
});

restartBtn.addEventListener("click", startQuiz);

function endQuiz() {
    finalContainer.style.display = "flex";
    questionContainer.style.display = "none";
    scoreboard.style.display = "none";
    highScoreButton.classList.remove("hide");
    nextBtn.classList.add("hide");
    restartBtn.classList.remove("hide");
    resultDiv.classList.remove("hide");
    resultDiv.innerText = `Your final score: ${score} / ${shuffledQuestions.length}`
}


highScoreButton.addEventListener("click", showScoreboard);

function showScoreboard() {
    scoreboard.style.display = "flex";
    startContainer.style.display = "none";
    questionContainer.style.display = "none";
    finalContainer.style.display = "none";
    returnBtn.classList.remove("hide");
    highScoreButton.classList.add("hide");
    leaderboardDiv.classList.remove("hide");
    // BUG: input is not defined
    leaderboardDiv.innerText = `1. ${input} - ${score}`
}

returnBtn.addEventListener("click", startState);

// todo: use generated answer below to troubleshoot timer
/*
<!-- chat gpt answer -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timer Example</title>
</head>
<body>
    <div>
        <p>Time Remaining: <span id="timer">60</span> seconds</p>
        <button onclick="answerQuestion(false)">Answer Wrong</button>
        <button onclick="answerQuestion(true)">Answer Correct</button>
    </div>

    <script>
        // Initialize the timer (e.g., 60 seconds)
        let timeRemaining = 60;
        const timerElement = document.getElementById('timer');

        // Function to start the timer countdown
        function startTimer() {
            const timerInterval = setInterval(() => {
                if (timeRemaining > 0) {
                    timeRemaining--;
                    timerElement.textContent = timeRemaining;
                } else {
                    clearInterval(timerInterval);
                    alert('Time is up!');
                }
            }, 1000); // 1000ms = 1s interval
        }

        // Function to handle question answers
        function answerQuestion(isCorrect) {
            if (!isCorrect) {
                timeRemaining = Math.max(0, timeRemaining - 10); // Decrement by 10 seconds but not below 0
                timerElement.textContent = timeRemaining;
            }
        }

        // Start the timer when the page loads
        window.onload = startTimer;
    </script>
</body>
</html>
*/