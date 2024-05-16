import { useLiveQuery } from 'dexie-react-hooks';

import { subakGameIndexedDb } from '../indexed-db/score-db';

export function useTopScores() {
  const topScoresQuery = () =>
    subakGameIndexedDb.scores.orderBy('points').reverse().limit(25).toArray();

  return useLiveQuery(topScoresQuery, []);
}
