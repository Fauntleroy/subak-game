import css from './leaderboard.module.css';

import React from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { subakGameIndexedDb } from '../../indexed-db/score-db';

export function Leaderboard() {
  const scores = useLiveQuery(() =>
    subakGameIndexedDb.scores.orderBy('points').limit(50).toArray()
  );

  return (
    <div className={css.leaderboard}>
      <div>
        Top Scores from <strong>This Browser</strong>
      </div>
      <div className={css.scores}>
        <table>
          <tbody>
            {scores?.map(({ id, name, points }, index) => {
              const rank = index + 1;

              return (
                <tr key={id}>
                  <td className={css.rank}>{rank}</td>
                  <td className={css.name}>{name}</td>
                  <td className={css.score}>
                    {Intl.NumberFormat().format(points)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
