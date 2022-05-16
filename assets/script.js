let counter;
var timer = 30;
var beginBtn = document.getElementById('begin-btn')
var questionContainerEl = document.getElementById('question-container')
// var timerEl = document.getElementById('game-timer')
var timerText = document.getElementById('game-timer')
var nextBtn = document.getElementById('next-btn')
var questionEl = document.getElementById('question')
var answerEl = document.getElementById('answer-buttons')
var randomQuestion
var currentIndex
var questionsArray = [
    {
        question: "What is the southern most point of Canada?",
        answers: [
        {text: "Leamington", correct: false},
        {text: "London", correct: false},
        {text: "Pelee Island", correct: true},
        {text: "Kingsville", correct: false}
        ] 
    },
    {
        question: "Who is the oldest person on the island?",
        answers: [
        {text: "Mike Ross", correct: false},
        {text: "Norma MacBride", correct: false},
        {text: "Canadian Doug", correct: false},
        {text: "Horny Herb", correct: true}
        ] 
    },
    {
        question: "What is Pelee Island's major export?",
        answers: [
        {text: "Wheat", correct: false},
        {text: "Wine", correct: true},
        {text: "Soybean", correct: false},
        {text: "Racoons", correct: false}
        ] 
    },
    {
        question: "What great lake does Pelee Island reside in?",
        answers: [
        {text: "Michigan", correct: false},
        {text: "Erie", correct: true},
        {text: " Huron", correct: false},
        {text: "Ontario", correct: false}
        ] 
    },
    {
        question: "What is unique to Pelee?",
        answers: [
        {text: "Friendly People", correct: false},
        {text: "Dirtroads", correct: false},
        {text: " No Cellphone signal", correct: false},
        {text: "No police", correct: true}
        ] 
    },  
]



beginBtn.addEventListener('click',() => {
    startGame();
    startTimer();
})




nextBtn.addEventListener('click', () => {
    currentIndex++
    nextQuestion()
})

// timer for quiz

function startTimer() {
    timer = 30;
    var gameTimer = setInterval(() => {
        timer--
        timerText.textContent= "Time Remaining: " + timer;
        if (timer === 0) {
            clearInterval(gameTimer)
            endGame()
        }
    }, 1000);
}





// randomizes quesitons
function startGame() {
    beginBtn.classList.add('hide')
    randomQuestion = questionsArray.sort(() => Math.random() - .5)
    currentIndex = 0
    questionContainerEl.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    reset()
    displayQuestion(randomQuestion[currentIndex])
}

function displayQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct 
        }
        button.addEventListener('click', selectAnswer)
        answerEl.appendChild(button)
    })
}

function reset() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answerEl.firstChild) {
        answerEl.removeChild
        (answerEl.firstChild)
    }
}
// choosing answer and moving through the quiz
function selectAnswer(e) {
    var selectedBtn =e.target
    var correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(randomQuestion.length > currentIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        beginBtn.innerText = 'Restart'
        beginBtn.classList.remove('hide')
    }
    nextBtn.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else { 
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function endGame() {
    console.log('game over')
    timerText.textContent= "Time Remaining: 0"
    var intials =prompt("your score: " + score + 
    "\n Enter Initials")
    var currentScores = JSON.parse(localStorage.getItem())
}


