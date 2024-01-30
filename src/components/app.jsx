import css from './app.module.css';

import React, { useDebugValue, useRef } from 'react';
import { useStore } from 'zustand';

import { Game } from './game';
import { CircleOfEvolution } from './circle-of-evolution';
import { GameOverDialog } from './game-over-dialog';
import { Debug } from './debug';

import debugStore from '../debug-store';
import store from '../store';

const useBoundStore = (selector) => useStore(store, selector);
const useBoundDebugStore = (selector) => useStore(debugStore, selector);

export function App() {
  const urlQuery = new URLSearchParams(window.location.search);
  const isDebugEnabled =
    !!urlQuery.get('debug') && urlQuery.get('debug') !== 'false';
  const gameRef = useRef(null);
  const score = useBoundStore((state) => state.score);
  const upcomingFruit = useBoundStore((state) => state.upcomingFruit);
  const upcomingFruitImageSrc = `./${upcomingFruit?.name}.png`;
  const isGameOver = useBoundStore((state) => state.isGameOver);
  const debugData = useBoundDebugStore((state) => state);

  return (
    <div className={css.app}>
      <div className={css.score}>
        <h3>Score</h3>
        <div>
          <var className={css.scoreNumber}>{score}</var>
        </div>
      </div>

      <div className={css.nextFruit}>
        <h3>Next</h3>
        {upcomingFruit && (
          <img className={css.nextFruitImage} src={upcomingFruitImageSrc} />
        )}
      </div>

      <div className={css.circleOfEvolution}>
        <h3>The Circle of Evolution</h3>
        <CircleOfEvolution />
      </div>

      <div className={css.game}>
        <Game gameRef={gameRef} debugConfig={debugData} />
      </div>

      {isGameOver && <GameOverDialog gameRef={gameRef} />}
      {isDebugEnabled && <Debug />}
    </div>
  );
}
