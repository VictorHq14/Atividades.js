const questions = [
    {
        question: "Quem foi o primeiro imperador romano?",
        options: ["Júlio César", "Augusto", "Nero", "Trajano"],
        answer: "Augusto"
    },
    {
        question: "Quem descobriu o Brasil?",
        options: ["Pedro Álvares Cabral", "Vasco da Gama", "Cristóvão Colombo", "Fernão de Magalhães"],
        answer: "Pedro Álvares Cabral"
    },
    {
        question: "Qual é a capital da França?",
        options: ["Londres", "Berlim", "Madri", "Paris"],
        answer: "Paris"
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        options: ["Machado de Assis", "Jorge Amado", "Miguel de Cervantes", "Clarice Lispector"],
        answer: "Miguel de Cervantes"
    }
];

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function loadQuestion() {
    const question = getRandomQuestion();
    document.getElementById('question').innerText = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option, question.answer);
        optionsContainer.appendChild(button);
    });

    document.getElementById('feedback').innerText = '';
    document.getElementById('reload-btn').style.display = 'none';
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        document.getElementById('feedback').innerText = 'Acertou!!!';
    } else {
        document.getElementById('feedback').innerText = `Resposta incorreta. A resposta correta é ${correctAnswer}.`;
    }
    document.getElementById('reload-btn').style.display = 'inline-block';
}

function reloadQuestion() {
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', loadQuestion);
