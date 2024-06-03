import css from './debug.module.css';

import React from 'react';
import { useStore } from 'zustand';

import store from '../../store';
import debugStore from '../../debug-store';
import { fruitsArray } from '../../data/fruits';

export function Debug() {
  const [, setUpcomingFruit] = useStore(store, (state) => [
    state.upcomingFruit,
    state.setUpcomingFruit
  ]);
  const [overrideFruit, setOverrideFruit] = useStore(debugStore, (state) => [
    state.overrideFruit,
    state.setOverrideFruit
  ]);
  const [disableMerging, setDisableMerging] = useStore(debugStore, (state) => [
    state.disableMerging,
    state.setDisableMerging
  ]);

  const fruitOptions = fruitsArray.map((fruit, i) => {
    return (
      <option key={fruit.name} value={i}>
        {fruit.name}
      </option>
    );
  });

  function handleFruitOverrideClick(
    event: React.MouseEvent<HTMLSelectElement>
  ) {
    const target = event.target as HTMLSelectElement;
    const fruitIndex = Number(target.value);
    const newFruit = fruitsArray[fruitIndex];
    setUpcomingFruit(newFruit);
    setOverrideFruit(newFruit);
  }

  function handleDisableMerging(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    setDisableMerging(target.checked);
  }

  return (
    <>
      <dialog className={css.debug} open={true}>
        <label>
          <div>Fruit Override</div>
          <select
            onClick={handleFruitOverrideClick}
            value={overrideFruit?.name}>
            {fruitOptions}
          </select>
        </label>
        <label>
          <div>Disable Merging</div>
          <input
            type="checkbox"
            checked={disableMerging}
            onChange={handleDisableMerging}
          />
        </label>
      </dialog>
    </>
  );
}
