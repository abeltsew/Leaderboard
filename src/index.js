import './style.css';

let user = '';
let score = '';

const nameField = document.getElementById('userName');
nameField.addEventListener('keyup', (e) => {
  user = e.target.value;
});
nameField.value = user;

const scoreField = document.getElementById('userScore');
scoreField.addEventListener('keyup', (e) => {
  score = e.target.value;
});
scoreField.value = score;

const resetInput = () => {
  user = '';
  score = '';
  nameField.value = '';
  scoreField.value = '';
};

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const ApiKey = 'qhvik7RAK2bFYB25gEBh';

const scoreBoard = document.querySelector('.score-table');

const renderData = async () => {
  const response = await fetch(`${baseUrl}games/${ApiKey}/scores/`);
  const { result } = await response.json();
  const ul = document.getElementsByTagName('ul')[0];
  ul.innerHTML = '';
  result
    .sort((a, b) => a.score - b.score)
    .reverse()
    .forEach((record) => {
      const li = document.createElement('li');
      li.innerHTML = `${record.user}:${record.score}`;
      scoreBoard.appendChild(li);
    });
};

document.addEventListener('DOMContentLoaded', () => renderData());

const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', () => renderData());

const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  const response = await fetch(`${baseUrl}games/${ApiKey}/scores/`, {
    method: 'POST',
    body: JSON.stringify({ user, score: Number(score) }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const { result } = await response.json();
  if (result === 'Leaderboard score created correctly.') {
    renderData();
    resetInput();
  }
});
