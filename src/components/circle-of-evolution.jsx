import css from './circle-of-evolution.module.css';

import React from 'react';

import { fruits } from '../data/fruits';

export function CircleOfEvolution() {
  const fruitsJsx = fruits.map((fruit, i) => {
    const offsetDistance = (i / fruits.length) * 100 - 20;

    return (
      <li
        className={css.fruit}
        key={fruit.name}
        style={{ offsetDistance: `${offsetDistance}%` }}>
        <img src={`./${fruit.name}.png`} />
      </li>
    );
  });

  return <ul className={css.fruits}>{fruitsJsx}</ul>;
}
