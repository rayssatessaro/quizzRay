// Declaração de variáveis
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
let actualQuestion = 0;

// Perguntas
const questions = [
  {
    "question": "Como é meu nome completo?",
    "answers": [
      {
        "answer": "Rayssa Lana Tessaro Santos",
        "correct": true
      },
      {
        "answer": "Rayssa Tessaro Santos",
        "correct": false
      },
      {
        "answer": "Rayssa Tessaro dos Santos",
        "correct": false
      },
      {
        "answer": "Rayssa Lana Tessaro dos Santos",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual é minha cor favorita?",
    "answers": [
      {
        "answer": "Rosa",
        "correct": false
      },
      {
        "answer": "Preto",
        "correct": false
      },
      {
        "answer": "Amarelo",
        "correct": true
      },
      {
        "answer": "Azul",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual é a data do meu aniverário?",
    "answers": [
      {
        "answer": "05/07",
        "correct": true
      },
      {
        "answer": "07/05",
        "correct": false
      },
      {
        "answer": "06/08",
        "correct": false
      },
      {
        "answer": "05/06",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual meu número de calçado?",
    "answers": [
      {
        "answer": "37",
        "correct": false
      },
      {
        "answer": "35",
        "correct": true
      },
      {
        "answer": "34",
        "correct": false
      },
      {
        "answer": "38",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual desses foi o nome de um animal de estimação que tive?",
    "answers": [
      {
        "answer": "Raio",
        "correct": false
      },
      {
        "answer": "Shrek",
        "correct": true
      },
      {
        "answer": "Toby",
        "correct": false
      },
      {
        "answer": "Lua",
        "correct": false
      },
    ]
  },
  {
    "question": "Quando terminei o ensino médio?",
    "answers": [
      {
        "answer": "2020",
        "correct": false
      },
      {
        "answer": "2019",
        "correct": false
      },
      {
        "answer": "2021",
        "correct": true
      },
      {
        "answer": "2022",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual é minha comida favorita?",
    "answers": [
      {
        "answer": "Arroz e feijão",
        "correct": false
      },
      {
        "answer": "Churrasco",
        "correct": true
      },
      {
        "answer": "Pizza",
        "correct": true
      },
      {
        "answer": "Lasanha",
        "correct": false
      },
    ]
  },
  {
    "question": "Quando eu adotei a Filomena?",
    "answers": [
      {
        "answer": "2020",
        "correct": false
      },
      {
        "answer": "2021",
        "correct": false
      },
      {
        "answer": "2018",
        "correct": false
      },
      {
        "answer": "2019",
        "correct": true
      },
    ]
  },
  {
    "question": "Qual é meu anime favorito?",
    "answers": [
      {
        "answer": "Jujutsu Kaisen",
        "correct": false
      },
      {
        "answer": "Naruto",
        "correct": false
      },
      {
        "answer": "Naruto Shippuden",
        "correct": true
      },
      {
        "answer": "One Piece",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual é minha estação do ano favorita?",
    "answers": [
      {
        "answer": "Verão",
        "correct": false
      },
      {
        "answer": "Primavera",
        "correct": false
      },
      {
        "answer": "Outono",
        "correct": true
      },
      {
        "answer": "Inverno",
        "correct": false
      },
    ]
  },
  {
    "question": "O que eu faço quando estou brava?",
    "answers": [
      {
        "answer": "Bico",
        "correct": true
      },
      {
        "answer": "Silencio",
        "correct": false
      },
      {
        "answer": "Bater os pés",
        "correct": false
      },
      {
        "answer": "Dar risada",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual curso estou fazendo?",
    "answers": [
      {
        "answer": "Engenharia de Computação",
        "correct": false
      },
      {
        "answer": "Sistemas de Informação",
        "correct": false
      },
      {
        "answer": "Ciencia da Computação",
        "correct": true
      },
      {
        "answer": "Analise e Desenvolvimento de Sistemas",
        "correct": false
      },
    ]
  },
  {
    "question": "O que eu mais gosto de fazer no tempo livre?",
    "answers": [
      {
        "answer": "Assistir TV",
        "correct": false
      },
      {
        "answer": "Ir na academia",
        "correct": false
      },
      {
        "answer": "Dormir",
        "correct": false
      },
      {
        "answer": "Bater perna",
        "correct": true
      },
    ]
  },
  {
    "question": "Qual era meu sonho de infância?",
    "answers": [
      {
        "answer": "Ir para a lua",
        "correct": false
      },
      {
        "answer": "Ser professora",
        "correct": false
      },
      {
        "answer": "Ser veterinária",
        "correct": true
      },
      {
        "answer": "Ir pra Disney",
        "correct": false
      },
    ]
  },
]

// Substituição do layout pela primeira questão
function init() {
  createQuestion(0)
}

// Create a question 
function createQuestion(i) {

  // Limpa questão anterior
  const oldButtons = answersBox.querySelectorAll("button");

  oldButtons.forEach(function(btn) {
    btn.remove();
  });

  // Altera texto da pergunta
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // Insere alternativas
  questions[i].answers.forEach(function(answer, i) {
    
    // Altera texto do template
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // remove classe de hide e template do template
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // Insere template na tela
    answersBox.appendChild(answerTemplate);

  });

  // Cria evento em todos os botões
  const buttons = answersBox.querySelectorAll("button");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      checkAnswer(this, buttons);
    });
  });

  // Incrementa o número atual de questões
  actualQuestion++;

}

// Verificando se resposta está correta
function checkAnswer(btn, buttons) {
  
  // Exibir respostas erradas e a certa
  buttons.forEach(function(button) {

    if(button.getAttribute("correct-answer") === "true") {
      button.classList.add("correct-answer");
      // checa se o usuário acertou
      if(btn === button) {
        // incrementa os pontos
        points++;
      }
    } else {
      button.classList.add("wrong-answer");
    }

  });

  nextQuestion();

}

// Exibe a próxima pergunta
function nextQuestion() {

  // Timer para ver se acertou ou errou
  setTimeout(function() {

    // checa se ainda há mais perguntas
    if(actualQuestion >= questions.length) {
      // apresenta msg de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion)

  }, 1000);

}

// Tela final
function showSuccessMessage() {

  hideOrShowQuizz();

  // calc score
  const score = ((points / questions.length) * 100).toFixed(2);
  const scoreDisplay = document.querySelector("#display-score span");

  scoreDisplay.textContent = score.toString();

  // alterar número de perguntas corretas
  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;

  // alterar total de perguntas
  const totalQuestions = document.querySelector("#questions-qty");
  totalQuestions.textContent = questions.length;

}

// Reiniciar Quizz
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function() {
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// Mostra ou exibe o quizz
function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
}

// Inicialização
init();