import './style.css';

import data from './data';

const scoreBoard = document.querySelector('.score-table');

data.forEach((record) => {
  const li = document.createElement('li');
  li.innerHTML = `${record.name}:${record.score}`;
  scoreBoard.appendChild(li);
});
