document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('clicker');
    const scoreDisplay = document.getElementById('score');
    let currentScore = 0;

    // Функция для обновления счета
    function updateScore() {
        currentScore++;
        scoreDisplay.textContent = currentScore;
    }

    // Обработчик нажатия кнопки
    clickButton.addEventListener('click', () => {
        updateScore();
        saveLeaderboard(currentScore);
    });

    // Сохранение таблицы лидеров
    function saveLeaderboard(score) {
        const leaderboardTable = document.getElementById('leaderboard');
        const newRow = leaderboardTable.insertRow(-1);
        const placeCell = newRow.insertCell(0);
        const nameCell = newRow.insertCell(1);
        const scoreCell = newRow.insertCell(2);

        placeCell.innerText = leaderboardTable.rows.length;
        nameCell.innerText = 'Игрок' + leaderboardTable.rows.length;
        scoreCell.innerText = score;
    }
});
