import css from './app.module.css';

import React, { useDebugValue, useEffect, useRef } from 'react';
import { useStore } from 'zustand';
import cx from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

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
      <div className={cx(css.nextFruit, css.hudSection)}>
        <h6 className={css.label}>Next</h6>
        <div className={css.nextFruitSlot}>
          <AnimatePresence>
            {upcomingFruit && (
              <motion.img
                initial={{ opacity: 0, scale: 0, x: '-150%' }}
                animate={{ opacity: 1, scale: 1, x: '0%' }}
                exit={{ opacity: 0, scale: 0, x: '150%' }}
                transition={{ delay: 0.25 }}
                className={css.nextFruitImage}
                src={upcomingFruitImageSrc}
                key={upcomingFruit.uuid}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className={cx(css.score, css.hudSection)}>
        <h6 className={css.label}>Score</h6>
        <var className={css.scoreNumber}>{score}</var>
      </div>

      <div className={cx(css.circleOfEvolution, css.hudSection)}>
        <h6 className={css.label}>Cycle</h6>
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
