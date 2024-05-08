import css from './score.module.css';

import React from 'react';

export function Score({ score }) {
  return <var className={css.score}>{score}</var>;
}
