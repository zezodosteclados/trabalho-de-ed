document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('quiz-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        var score = calculateScore(form); // Calcula a pontuação do quiz
        displayResults(score); // Exibe os resultados do quiz
    });
});

function calculateScore(form) {
    var score = 0;

    // Verifica as respostas do usuário
    var answers = ['a', 'b', 'b']; // Respostas corretas para as perguntas
    for (var i = 0; i < answers.length; i++) {
        var questionName = 'q' + (i + 1);
        var selectedAnswer = form.elements[questionName].value;
        if (selectedAnswer === answers[i]) {
            score++;
        }
    }

    return score;
}

function displayResults(score) {
    var resultsDiv = document.getElementById('quiz-results');
    resultsDiv.innerHTML = 'Você acertou ' + score + ' de 3 perguntas.';
}
