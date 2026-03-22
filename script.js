// ===== DOM =====
const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const continueBtn = document.querySelector('.continue-btn');
const main = document.querySelector('.main');

const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');

const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');

const toggleBtn = document.getElementById("theme-toggle");
const categorySelect = document.getElementById("category");
const difficultySelect = document.getElementById("difficulty");

// ===== SOUND =====
const correctSound = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
const wrongSound = new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3");

// ===== STATE =====
let questions = [];
let currentIndex = 0;
let score = 0;

// ===== TIMER =====
let totalTime = 60;
let timerInterval;

// ===== TIMER UI =====
function updateTimerUI() {
    const el = document.getElementById("timer");
    if (!el) return;

    const min = Math.floor(totalTime / 60);
    const sec = totalTime % 60;

    el.textContent = `${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

// ===== START TIMER =====
function startTimer() {
    clearInterval(timerInterval);
    totalTime = 60;
    updateTimerUI();

    timerInterval = setInterval(() => {
        totalTime--;

        if (totalTime <= 0) {
            clearInterval(timerInterval);

            currentIndex++;
            if (currentIndex < questions.length) {
                showQuestion(currentIndex);
                startTimer();
            } else {
                showResult();
            }
            return;
        }

        updateTimerUI();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

// ===== FETCH QUESTIONS =====
async function fetchQuestions() {
    quizBox.innerHTML = `<div class="loader"></div>`;

    const category = categorySelect?.value || 18;
    const difficulty = difficultySelect?.value || "medium";

    const res = await fetch(
        `https://opentdb.com/api.php?amount=15&category=${category}&difficulty=${difficulty}&type=multiple`
    );

    const data = await res.json();

    questions = data.results.map((q) => {
        const options = [...q.incorrect_answers];
        options.splice(Math.floor(Math.random()*4),0,q.correct_answer);

        return {
            question: decodeHTML(q.question),
            answer: decodeHTML(q.correct_answer),
            options: options.map(o => decodeHTML(o))
        };
    });
}

// ===== DECODE =====
function decodeHTML(html){
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

// ===== SHOW QUESTION =====
function showQuestion(index){
    const q = questions[index];

    quizBox.classList.add("fade");

    setTimeout(()=>{
        quizBox.innerHTML = `
            <div class="quiz-header">
                <span>Q ${index+1} / ${questions.length}</span>
                <span>⏱ <span id="timer">00:60</span></span>
                <span id="score">${score} / ${questions.length}</span>
            </div>

            <div class="progress-bar">
                <div class="progress-fill" style="width:${(index/questions.length)*100}%"></div>
            </div>

            <h2 class="question-text">${q.question}</h2>

            <div class="options">
                ${q.options.map(o=>`<div class="option">${o}</div>`).join("")}
            </div>

            <div class="quiz-footer">
                <button class="pre-btn">Back</button>
                <button class="next-btn">Next</button>
            </div>
        `;

        quizBox.classList.remove("fade");

        updateTimerUI();
        attachOptionEvents();
        attachNavEvents();

    },200);
}

// ===== OPTION CLICK =====
function attachOptionEvents(){
    const options = document.querySelectorAll('.option');

    options.forEach(opt=>{
        opt.onclick = ()=>{
            const selected = opt.textContent;
            const correct = questions[currentIndex].answer;

            if(selected === correct){
                opt.classList.add('correct');
                score++;
                correctSound.play();
            } else {
                opt.classList.add('incorrect');
                wrongSound.play();
            }

            // highlight correct
            options.forEach(o=>{
                if(o.textContent === correct){
                    o.classList.add('correct');
                }
                o.classList.add('disabled');
            });

            // update score
            const scoreEl = document.getElementById("score");
            if(scoreEl){
                scoreEl.textContent = `${score} / ${questions.length}`;
            }
        };
    });
}

// ===== NAVIGATION =====
function attachNavEvents(){
    document.querySelector('.next-btn').onclick = ()=>{
        currentIndex++;

        if(currentIndex < questions.length){
            showQuestion(currentIndex);
        } else {
            showResult();
        }
    };

    document.querySelector('.pre-btn').onclick = ()=>{
        if(currentIndex > 0){
            currentIndex--;
            showQuestion(currentIndex);
        }
    };
}

// ===== RESULT =====
function showResult(){
    stopTimer();

    quizBox.style.display="none";
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');

    const best = Math.max(score, localStorage.getItem("bestScore") || 0);
    localStorage.setItem("bestScore", best);

    scoreText.innerHTML = `
        Score: ${score} / ${questions.length} <br>
        Best Score: ${best}
    `;

    animateProgress();
}

// ===== PROGRESS =====
function animateProgress(){
    const progressValue = document.querySelector('.progress-value');
    const circularProgress = document.querySelector('.circular-progress');

    let p = 0;
    let target = (score / questions.length)*100;

    let interval = setInterval(()=>{
        p++;
        progressValue.textContent = `${p}%`;

        circularProgress.style.background =
            `conic-gradient(#c40094 ${p*3.6}deg, #222 0deg)`;

        if(p >= target) clearInterval(interval);
    },15);
}

// ===== BUTTON EVENTS =====
startBtn.onclick = ()=>{
    popupInfo.classList.add('active');
    main.classList.add('active');
};

exitBtn.onclick = ()=>{
    popupInfo.classList.remove('active');
    main.classList.remove('active');
};

continueBtn.onclick = async ()=>{
    popupInfo.classList.remove('active');
    main.classList.remove('active');

    quizSection.classList.add('active');

    currentIndex = 0;
    score = 0;

    await fetchQuestions();
    showQuestion(0);
    startTimer();
};

tryAgainBtn.onclick = async ()=>{
    resultBox.classList.remove('active');
    quizBox.style.display="block";

    currentIndex = 0;
    score = 0;

    await fetchQuestions();
    showQuestion(0);
    startTimer();
};

goHomeBtn.onclick = ()=>{
    location.reload();
};

// ===== THEME =====
if(toggleBtn){
    toggleBtn.onclick = ()=>{
        document.body.classList.toggle("light");
    };
}