import css from './debug.module.css';

import React from 'react';
import { useStore } from 'zustand';

import store from '../../store';
import debugStore from '../../debug-store';
import { fruits } from '../../data/fruits';

const useBoundStore = (selector) => useStore(store, selector);
const useBoundDebugStore = (selector) => useStore(debugStore, selector);

export function Debug() {
  const [upcomingFruit, setUpcomingFruit] = useBoundStore((state) => [
    state.upcomingFruit,
    state.setUpcomingFruit
  ]);
  const [overrideFruit, setOverrideFruit] = useBoundDebugStore((state) => [
    state.overrideFruit,
    state.setOverrideFruit
  ]);
  const [disableMerging, setDisableMerging] = useBoundDebugStore((state) => [
    state.disableMerging,
    state.setDisableMerging
  ]);

  const fruitOptions = fruits.map((fruit, i) => {
    return (
      <option key={fruit.name} value={i}>
        {fruit.name}
      </option>
    );
  });

  function handleFruitOverrideClick(event) {
    const newFruit = fruits[event.target.value];
    setUpcomingFruit(newFruit);
    setOverrideFruit(newFruit);
  }

  function handleDisableMerging(event) {
    setDisableMerging(event.target.checked);
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
