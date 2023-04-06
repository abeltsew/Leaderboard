import './style.css';

const data = [
  { name: 'user1', score: 100 },
  { name: 'user2', score: 200 },
  { name: 'user3', score: 20 },
  { name: 'user4', score: 100 },
  { name: 'user5', score: 30 },
  { name: 'user6', score: 600 },
];

const scoreBoard = document.querySelector('.score-table');

data.forEach((record) => {
  const li = document.createElement('li');
  li.innerHTML = `${record.name}:${record.score}`;
  scoreBoard.appendChild(li);
});
