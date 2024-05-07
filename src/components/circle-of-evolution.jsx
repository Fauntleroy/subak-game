import css from './circle-of-evolution.module.css';

import React from 'react';
import { chunk } from 'lodash-es';

import { fruits } from '../data/fruits';

export function CircleOfEvolution() {
  const fruitGroups = chunk(fruits, Math.ceil(fruits.length / 2));

  const fruitGroupsJsx = fruitGroups.map((fruits, fruitGroupIndex) => {
    const fruitsJsx = fruits.map((fruit, i) => {
      const offsetDistance = (i / fruits.length) * -92;

      return (
        <div className={css.fruit} key={fruit.name}>
          <img src={`./${fruit.name}.png`} />
        </div>
      );
    });

    return (
      <div className={css.fruitGroup} key={`fruit-group-${fruitGroupIndex}`}>
        {fruitsJsx}
      </div>
    );
  });

  return (
    <div className={css.fruits}>
      <div className={css.fruitLoop} />
      <div className={css.fruitGroups}>{fruitGroupsJsx}</div>
    </div>
  );
}
