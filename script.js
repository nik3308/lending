// Функция для FAQ
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        element.style.background = '#f8f9fa';
    } else {
        // Закрываем все остальные FAQ
        const allAnswers = document.querySelectorAll('.faq-answer');
        const allQuestions = document.querySelectorAll('.faq-question');
        
        allAnswers.forEach(ans => ans.style.display = 'none');
        allQuestions.forEach(q => q.style.background = '#f8f9fa');
        
        // Открываем текущий FAQ
        answer.style.display = 'block';
        element.style.background = '#e9ecef';
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация событий для страницы
    // Здесь можно добавить дополнительную логику инициализации при необходимости
});
