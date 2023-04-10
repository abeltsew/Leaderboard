import { ApiKey, baseUrl } from '../config/api.js';

const scoreBoard = document.querySelector('.score-table');
export default async () => {
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
