const data = [
  {
    id: 1,
    question: "Which is the largest coffee-producing state of India?",
    answers: [
      { answer: "Assam", isCorrect: false },
      { answer: "Jammu and Kashmir", isCorrect: false },
      { answer: "Karanataka", isCorrect: true },
      { answer: "Kerala", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Which of the following states is not located in the North?",
    answers: [
      { answer: "Jharkhand", isCorrect: true },
      { answer: "Jammu and Kashmir", isCorrect: false },
      { answer: "Himachal Pradesh", isCorrect: false },
      { answer: "Haryana", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Which state has the largest area?",
    answers: [
      { answer: "Rajasthan", isCorrect: true },
      { answer: "Madhya Pradesh", isCorrect: false },
      { answer: "Uttar Pradesh", isCorrect: false },
      { answer: "Maharastra", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "Which state has the largest population?",
    answers: [
      { answer: "Bihar", isCorrect: false },
      { answer: "Madhya Pradesh", isCorrect: false },
      { answer: "Uttar Pradesh", isCorrect: true },
      { answer: "Maharastra", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "How much ahead is India’s time from Greenwich time?",
    answers: [
      { answer: "4 hours 30 mins", isCorrect: false },
      { answer: "5 hours 30 mins", isCorrect: true },
      { answer: "5 hours 15 mins", isCorrect: false },
      { answer: "5 hours", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "The national game of India is?",
    answers: [
      { answer: "Cricket", isCorrect: false },
      { answer: "Football", isCorrect: false },
      { answer: "Badminton", isCorrect: false },
      { answer: "Hockey", isCorrect: true },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let totalScore = 0; // score
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  totalScore = 0; // score
  selectedAnswer;
  showQuestion(qIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

//to display result
const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";
  //correct count update
  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answer: ${correctCount}`;
  //wrong count update
  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answer: ${wrongCount}`;
  //score update
  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`;
};

//to show a question and answer
const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  //to display question
  question.textContent = data[qNumber].question;
  //to display answers
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
  <div class="answer">
  <input name="answer" type="radio" id=${index} value=${item.isCorrect} />
  <label for=${index}>${item.answer}</label>
</div>
  `
    )
    .join("");
  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      // console.log(e.target.value);
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else {
      alert("Select an answer");
    }
  });
};

showQuestion(qIndex);
submitAnswer();
