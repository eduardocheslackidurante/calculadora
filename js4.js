// script.js

function checkAnswers() {
  const form = document.getElementById('quizForm');
  const resultDiv = document.getElementById('result');

  // Respostas corretas
  const correctAnswers = {
      q1: "Python",  // Resposta correta da primeira pergunta
      q2: "Linux"    // Resposta correta da segunda pergunta
  };

  let score = 0;  // Variável para guardar a pontuação
  let totalQuestions = Object.keys(correctAnswers).length;

  // Limpa qualquer marcação anterior
  document.querySelectorAll('.correct-answer, .wrong-answer').forEach(el => {
      el.classList.remove('correct-answer', 'wrong-answer');
  });

  // Checa cada resposta e aplica as cores
  for (let question in correctAnswers) {
      const selectedOption = form.querySelector(`input[name="${question}"]:checked`);
      const correctOption = form.querySelector(`input[name="${question}"][value="${correctAnswers[question]}"]`);
      
      if (selectedOption) {
          if (selectedOption.value === correctAnswers[question]) {
              score++;  // Incrementa a pontuação se a resposta estiver correta
              selectedOption.nextElementSibling.classList.add('correct-answer');  // Marca como correta
          } else {
              selectedOption.nextElementSibling.classList.add('wrong-answer');  // Marca como errada
          }
      }
      
      // Marca a resposta correta em verde, mesmo que o usuário não tenha escolhido essa opção
      if (correctOption) {
          correctOption.nextElementSibling.classList.add('correct-answer');
      }
  }

  // Exibe a pontuação
  resultDiv.innerHTML = `<h2>Resultado</h2><p>Você acertou ${score} de ${totalQuestions} perguntas.</p>`;
}
