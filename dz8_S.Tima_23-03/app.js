const buttons = document.querySelectorAll('.show-answer');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.classList.toggle('hidden');
        if (answer.classList.contains('hidden')) {
            button.textContent = 'Показать ответ';
        } else {
            button.textContent = 'Скрыть ответ';
        }
    });
});
