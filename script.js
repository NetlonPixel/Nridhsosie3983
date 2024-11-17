document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('clicker');
    const scoreDisplay = document.getElementById('score');
    let currentScore = 0;
    let userID = localStorage.getItem('userID') || generateUserID(); // Генерируем новый ID, если его нет
    let username = localStorage.getItem('username') || `Игрок ${userID}`;

    // Функция для генерации уникального ID
    function generateUserID() {
        return Math.random().toString(36).substring(7); // Уникальный случайный ID
    }

    // Функция для обновления счета
    function updateScore() {
        currentScore++;
        scoreDisplay.textContent = currentScore;
        localStorage.setItem('currentScore', currentScore); // Сохраняем текущий счет в localStorage
    }

    // Загружаем сохраненный счет, если он есть
    if (localStorage.getItem('currentScore')) {
        currentScore = parseInt(localStorage.getItem('currentScore'));
        scoreDisplay.textContent = currentScore;
    }

    // Обработчик нажатия кнопки
    clickButton.addEventListener('click', () => {
        updateScore();
        saveLeaderboard(userID, username, currentScore);
    });

    // Сохранение таблицы лидеров
    function saveLeaderboard(id, name, score) {
        const leaderboardTable = document.getElementById('leaderboard');
        const existingRow = Array.from(leaderboardTable.querySelectorAll('tr')).find(row => row.cells[1].innerText === name);

        if (!existingRow) { // Если строки с таким пользователем еще нет
            const newRow = leaderboardTable.insertRow(-1);
            const placeCell = newRow.insertCell(0);
            const nameCell = newRow.insertCell(1);
            const scoreCell = newRow.insertCell(2);

            placeCell.innerText = leaderboardTable.rows.length - 1; // Место в таблице
            nameCell.innerText = name;
            scoreCell.innerText = score;
        } else { // Если строка уже существует, просто обновляем очки
            existingRow.cells[2].innerText = score;
        }
    }

    // Сохраняем ID пользователя в localStorage
    localStorage.setItem('userID', userID);
    localStorage.setItem('username', username);
});currentSco
