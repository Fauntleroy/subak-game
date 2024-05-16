import css from './leaderboard.module.css';

import React from 'react';
import { isEmpty } from 'lodash-es';

const formatter = new Intl.DateTimeFormat('en-US', {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit'
});

interface Score {
  id: number;
  name?: string;
  points: number;
  time: number;
  createdAt: Date;
}

interface LeaderboardProps {
  scores: Score[];
}

export function Leaderboard({ scores }: LeaderboardProps) {
  return (
    !isEmpty(scores) && (
      <div className={css.leaderboard}>
        <div>
          Top Scores from <strong>This Browser</strong>
        </div>
        <div className={css.scores}>
          <div className={css.scoresScroll}>
            <table>
              <tbody>
                {scores?.map(({ id, createdAt, points }, index) => {
                  const rank = index + 1;

                  return (
                    <tr key={id}>
                      <td className={css.rank}>{rank}</td>
                      <td className={css.score}>
                        <strong>{Intl.NumberFormat().format(points)}</strong>
                      </td>
                      <td className={css.createdAt}>
                        {formatter.format(createdAt)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  );
}
