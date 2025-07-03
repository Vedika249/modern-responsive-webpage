// ---------- QUIZ LOGIC ----------
const quizData = [
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Computer Style System", "Creative Style Syntax", "Code Styling Script"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which JavaScript keyword declares a variable?",
    options: ["var", "define", "int", "letvar"],
    answer: "var"
  },
  {
    question: "Which HTML tag is used for inserting an image?",
    options: ["<img>", "<image>", "<pic>", "<media>"],
    answer: "<img>"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === q.answer) score++;
      nextQuestion();
    };
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("question").textContent = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score").textContent = `Your Score: ${score} / ${quizData.length}`;
  }
}

// Load first question
window.onload = loadQuestion;

// ---------- API FETCH ----------
function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke-display").textContent = data.joke;
    })
    .catch(err => {
      document.getElementById("joke-display").textContent = "Failed to fetch a joke.";
    });
}
