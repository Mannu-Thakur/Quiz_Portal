const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
};

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
};

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
};

tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    nxtBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
};

goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nxtBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
};





let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nxtBtn = document.querySelector('.next-btn');
nxtBtn.onclick = () => {
    questionCount++;
    if (questionCount < questions.length) {
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);
        nxtBtn.classList.remove('active');
    } else {
        // You can add logic to show results or restart the quiz as a smooth popup
        // this needs to be updated  very soon
        showResultBox();
    }
};

//for prev button
const preBtn = document.querySelector('.pre-btn');
preBtn.onclick = () => {
    if (questionCount > 0) {
        questionCount -= 1;
        showQuestions(questionCount);
        questionNumb -= 1;
        questionCounter(questionNumb);
    }
};

//getting questions and options from array
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    const optionList = document.querySelector('.options');

    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;
    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>    
    <div class="option"><span>${questions[index].options[3]}</span></div>`;
    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; ++i) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

// function for optionSelected
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let options = document.querySelector('.options');
    let allOptions = options.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    } else {
        answer.classList.add('incorrect');

        for (let i = 0; i < allOptions; ++i) {
            if (options.children[i].textContent == correctAnswer) {
                options.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    for (let i = 0; i < allOptions; ++i) {
        options.children[i].classList.add('disabled');
    }

    nxtBtn.classList.add('active');
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
    const headScoreText = document.querySelector('.header-score');
    headScoreText.textContent = `Score :${userScore} / ${questions.length}`;
}


function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your score ${userScore} out of ${questions.length}`;

    const progressValue = document.querySelector('.progress-value'); // fixed typo
    const circularProgress = document.querySelector('.circular-progress');
    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}


//timer
  let totalTime = 60; 
  const timerDisplay = document.getElementById("timer");

  const updateTimer = () => {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    timerDisplay.textContent = 
      `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (totalTime === 0) {
      clearInterval(timerInterval);
      alert("Time's up!");  
    }

    totalTime--;
  };

  updateTimer(); // initialize immediately
  const timerInterval = setInterval(updateTimer, 1000);




