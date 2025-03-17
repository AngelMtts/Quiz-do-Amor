/* Arquivo: script.js */
const questions = [
    {
        question: "Onde foi nosso primeiro encontro?",
        options: ["Copacabana Palace", "Madureira Shopping", "Norte Shopping vulto Taste Lab", "na Cadeia ao som de Fantastic"],
        answer: "Norte Shopping vulto Taste Lab"
    },
    {
        question: "Qual a minha coisa favorita em você?",
        options: ["Bunda", "Sorriso", "Tudo", "Sua Mente"],
        answer: "Tudo"
    },
    {
        question: "Qual o nosso apelido mais fofo um para o outro?",
        options: ["Moranguinho e Ursinha", "Minha Princesa e Cezinha", "Momolada e Bê"],
        answer: "Momolada e Bê"
    },
    {
        question: "Se eu pudesse planejar o encontro perfeito para nós, qual seria?",
        options: ["Piquenique", "Caça ao tesouro", "Corrida de carros", "Museus"],
        answer: "Corrida de carros"
    },
    {
        question: "Qual é o nosso filme/série favorito?",
        options: ["Hora de Aventura", "Jogos Vorazes", "Harry Potter", "Uzumaki", "Arcane"],
        answer: "Arcane"
    },
    {
        question: "Quem é considerado o 'pai da sociologia'?",
        options: ["Karl Marx", "Émile Durkheim", "Max Weber", "Auguste Comte"],
        answer: "Auguste Comte"
    },
    {
        question: "O que significa 'fato social', conceito desenvolvido por Émile Durkheim?",
        options: ["Um evento político de grande repercussão", "Uma prática coletiva que influencia o comportamento individual", "A forma como a sociedade se organiza economicamente", "A luta de classes entre proletariado e burguesia"],
        answer: "Uma prática coletiva que influencia o comportamento individual"
    },
    {
        question: "Qual dessas teorias sociológicas enfatiza a desigualdade e o conflito entre classes sociais?",
        options: ["Funcionalismo", "Interacionismo Simbólico", "Teoria do Conflito", "Estruturalismo"],
        answer: "Teoria do Conflito"
    },
    {
        question: "Qual desses conceitos define um governo em que o poder está concentrado nas mãos de uma única pessoa?",
        options: ["Democracia", "Autoritarismo", "Oligarquia", "Anarquia"],
        answer: "Autoritarismo"
    },
    {
        question: "O que significa 'Estado de Bem-Estar Social'?",
        options: ["Um modelo de governo que prioriza apenas a economia", "Um regime político baseado no liberalismo radical", "Um sistema que busca garantir direitos básicos, como saúde e educação", "Uma teoria marxista de distribuição igualitária de renda"],
        answer: "Um sistema que busca garantir direitos básicos, como saúde e educação"
    },
    {
        question: "Qual dessas filósofas feministas escreveu 'O Segundo Sexo', um dos marcos do pensamento feminista?",
        options: ["Simone de Beauvoir", "Angela Davis", "Judith Butler", "Bell Hooks"],
        answer: "Simone de Beauvoir"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
    const questionObj = questions[currentQuestion];

    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.textContent = questionObj.question;
    quizDiv.appendChild(questionElement);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");
    
    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });

    quizDiv.appendChild(optionsDiv);
}

function checkAnswer(selected) { 
    const message = document.getElementById("message");

    if (selected === questions[currentQuestion].answer) {
        score++;
        message.textContent = "✅ Resposta correta!";
        message.style.color = "green";
    } else {
        message.textContent = "❌ Resposta errada!";
        message.style.color = "red";
    }

    document.querySelectorAll(".options button").forEach(button => button.disabled = true);

    // Avançar para a próxima pergunta após um pequeno atraso
    setTimeout(() => {
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            loadQuestion(); // Carrega a próxima pergunta
            message.textContent = ""; // Limpa a mensagem ao avançar
        } else {
            endQuiz();
        }
    }, 1000); // Pequeno atraso para mostrar o feedback
}

function endQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
    const resultMessage = document.createElement("div");
    resultMessage.textContent = `Parabéns! Você acertou ${score} de ${questions.length} perguntas!`;
    quizDiv.appendChild(resultMessage);
}

loadQuestion();
