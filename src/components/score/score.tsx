import css from './score.module.css';

import React from 'react';

export function Score({ score = 0 }) {
  const scoreString = score.toLocaleString();

  return <var className={css.score}>{scoreString}</var>;
}
