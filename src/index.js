import addScore from './module/addScore.js';
import renderData from './module/renderData.js';
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

document.addEventListener('DOMContentLoaded', () => renderData());

const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', () => renderData());

const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  addScore(user, score).then((result) => {
    if (result === 'Leaderboard score created correctly.') {
      renderData();
      resetInput();
    }
  });
});
