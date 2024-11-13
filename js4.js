function checkAnswers() {
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    let score = 0;

    // Respostas corretas
    const correctAnswers = {
        q1: "Python",
        q2: "JavaScript",
        q3: "Python",
        q4: "C++",
        q5: "Java",
        q6: "Python",
        q7: "Java",
        q8: "C++",
        q9: "Python",
        q10: "Python"
    };

    // Checa as respostas
    for (let question in correctAnswers) {
        const selectedAnswer = form.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    // Exibe o resultado
    resultDiv.innerHTML = `Você acertou ${score} de 10 respostas.`;
}

function resetQuiz() {
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');

    // Limpa todas as respostas
    form.reset();

    // Limpa o resultado exibido
    resultDiv.innerHTML = '';
}
