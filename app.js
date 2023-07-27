document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.getElementById("quiz");
    const submitButton = document.getElementById("submitBtn");
    const resultContainer = document.getElementById("result");
  
    const quizData = [
      {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Earth", "Mars", "Venus", "Mercury"],
        correctAnswer: "Mercury"
      }
      // Add more quiz questions here
    ];
  
    function buildQuiz() {
      quizContainer.innerHTML = "";
      quizData.forEach((data, index) => {
        const questionElem = document.createElement("div");
        questionElem.classList.add("question");
        questionElem.innerHTML = `<p>${index + 1}. ${data.question}</p>`;
        
        data.options.forEach((option) => {
          const optionElem = document.createElement("input");
          optionElem.type = "radio";
          optionElem.name = `question${index}`;
          optionElem.value = option;
          const labelElem = document.createElement("label");
          labelElem.textContent = option;
          questionElem.appendChild(optionElem);
          questionElem.appendChild(labelElem);
        });
        
        quizContainer.appendChild(questionElem);
      });
    }
  
    function calculateScore() {
      let score = 0;
      quizData.forEach((data, index) => {
        const selectedOption = document.querySelector(`input[name=question${index}]:checked`);
        if (selectedOption && selectedOption.value === data.correctAnswer) {
          score++;
        }
      });
      return score;
    }
  
    function showResult(score) {
      resultContainer.textContent = `Your score: ${score}/${quizData.length}`;
    }
  
    submitButton.addEventListener("click", function() {
      const score = calculateScore();
      showResult(score);
    });
  
    buildQuiz();
  });
  
  
  
  
  
  
  