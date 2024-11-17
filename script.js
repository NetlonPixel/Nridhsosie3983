// Инициализация
let currentScore = 0;
const coin = document.getElementById('coin');
const scoreDisplay = document.getElementById('score');
const leadersList = document.getElementById('leaders-list');
const swapButton = document.getElementById('swap-button');

// Функции для работы с таблицей лидеров
function loadLeaders() {
    const storedLeaders = JSON.parse(localStorage.getItem('leaders')) || [];
    storedLeaders.sort((a, b) => b.score - a.score);
    storedLeaders.slice(0, 10).forEach(({name, score}) => {
        const li = document.createElement('li');
        li.className = 'leader-item';
        li.innerHTML = `<span class="leader-name">${name}</span><span class="leader-score">${score}</span>`;
        leadersList.appendChild(li);
    });
}

function addToLeaders(name, score) {
    const storedLeaders = JSON.parse(localStorage.getItem('leaders')) || [];
    storedLeaders.push({name, score});
    localStorage.setItem('leaders', JSON.stringify(storedLeaders));
    leadersList.innerHTML = '';
    loadLeaders();
}

// Обработчики событий
coin.addEventListener('click', () => {
    currentScore += 1;
    scoreDisplay.textContent = currentScore;
});

swapButton.addEventListener('click', () => {
    if (confirm('Вы уверены, что хотите SWAP? Вы потеряете все свои NotCoins.')) {
        currentScore = 0;
        scoreDisplay.textContent = currentScore;
        addToLeaders('Player', currentScore);
    }
});

// Загрузить таблицу лидеров при старте приложения
loadLeaders();
