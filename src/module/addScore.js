import { ApiKey, baseUrl } from '../config/api.js';

export default async (user, score) => {
  const response = await fetch(`${baseUrl}games/${ApiKey}/scores/`, {
    method: 'POST',
    body: JSON.stringify({ user, score: Number(score) }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const { result } = await response.json();

  //   return result === 'Leaderboard score created correctly.'? 'success' : 'error';
  return Promise.resolve(result);
};
