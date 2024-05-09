import css from './score.module.css';

import React from 'react';

interface ScoreProps {
  score: number;
}

export function Score({ score = 0 }: ScoreProps) {
  const scoreString = score.toLocaleString();

  return <var className={css.score}>{scoreString}</var>;
}
