import css from './app.module.css';

import React, { useRef, useState } from 'react';
import { useStore } from 'zustand';
import cx from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

import { Game } from '../game/game';
import { CircleOfEvolution } from '../circle-of-evolution/circle-of-evolution';
import { GameOverDialog } from '../game-over-dialog/game-over-dialog';
import { Score } from '../score/score';
import { Debug } from '../debug/debug';

import store from '../../store';
import { StartDialog } from '../start-dialog/start-dialog';

export function App() {
  const urlQuery = new URLSearchParams(window.location.search);
  const isDebugEnabled =
    !!urlQuery.get('debug') && urlQuery.get('debug') !== 'false';
  const gameRef = useRef(null);
  const score = useStore(store, (state) => state.score);
  const upcomingFruit = useStore(store, (state) => state.upcomingFruit);
  const upcomingFruitImageSrc = `./${upcomingFruit?.name}.png`;
  const isGameOver = useStore(store, (state) => state.isGameOver);
  const isGameStarted = useStore(store, (state) => state.isStarted);
  const [isDropping, setIsDropping] = useState(false);

  const className = cx(css.app, {
    [css.isGameOver]: isGameOver,
    [css.isNotStarted]: !isGameStarted
  });

  function handleGameMouseUp() {
    setIsDropping(true);
    setTimeout(() => {
      setIsDropping(false);
    }, 250);
  }

  return (
    <>
      <div className={className}>
        <div className={cx(css.nextFruit, css.hudSection)}>
          <h6 className={css.label}>Next</h6>
          <div className={css.nextFruitSlot}>
            <AnimatePresence>
              {upcomingFruit && (
                <motion.img
                  initial={{ opacity: 0, scale: 0.25, x: '-150%' }}
                  animate={{ opacity: 1, scale: 1, x: '0%' }}
                  exit={{ opacity: 0, scale: 0.25, x: '150%' }}
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
          <Score score={score} />
        </div>

        <div className={cx(css.circleOfEvolution, css.hudSection)}>
          <h6 className={css.label}>Cycle</h6>
          <CircleOfEvolution />
        </div>

        <div
          className={cx(css.game, { [css.isDropping]: isDropping })}
          onMouseUp={handleGameMouseUp}>
          <Game gameRef={gameRef} />
        </div>

        {isGameOver && <GameOverDialog gameRef={gameRef} />}
        {!isGameStarted && <StartDialog />}
      </div>
      {isDebugEnabled && <Debug />}
    </>
  );
}
