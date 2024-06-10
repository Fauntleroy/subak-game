import css from './subak-game.module.css';

import React, { useCallback, useRef, useState } from 'react';

import { useStore } from 'zustand';
import { useBoundingclientrect } from 'rooks';
import cx from 'classnames';

import { AnimatePresence } from 'framer-motion';

import { Game } from '../game/game';
import { CircleOfEvolution } from '../circle-of-evolution/circle-of-evolution';
import { GameOverDialog } from '../game-over-dialog/game-over-dialog';
import { Score } from '../score/score';
import { Debug } from '../debug/debug';
import { NextFruit } from '../next-fruit/next-fruit';
import { StartDialog } from '../start-dialog/start-dialog';

import store from '../../store';

export function SubakGame() {
  const urlQuery = new URLSearchParams(window.location.search);
  const isDebugEnabled =
    !!urlQuery.get('debug') && urlQuery.get('debug') !== 'false';
  const gameRef: React.MutableRefObject<Phaser.Game | null> =
    useRef<Phaser.Game>(null);
  const gameSectionRef = useRef(null);
  const gameBoundingRect = useBoundingclientrect(gameSectionRef);
  const score = useStore(store, (state) => state.score);
  const nextFruit = useStore(store, (state) => state.upcomingFruit);
  const isGameOver = useStore(store, (state) => state.isGameOver);
  const isGameStarted = useStore(store, (state) => state.isStarted);
  const setPointerX = useStore(store, (state) => state.setPointerX);
  const [isDropping, setIsDropping] = useState(false);

  function handleMouseDown(event: React.MouseEvent<HTMLDivElement>) {
    const pointerX = event.clientX || 0;
    handlePointerDown(pointerX);
  }
  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    const pointerX = event.touches[0].clientX || 0;
    handlePointerDown(pointerX);
  }
  const handlePointerDown = useCallback(
    function handlePointerDown(pointerX: number) {
      const x = gameBoundingRect?.x || 0;
      const gameX = pointerX - x;
      setPointerX(gameX);
    },
    [gameBoundingRect?.x, setPointerX]
  );

  function handleMouseUp() {
    handlePointerUp();
  }
  function handleTouchEnd() {
    handlePointerUp();
  }
  function handlePointerUp() {
    if (!gameRef.current) {
      return;
    }
    setIsDropping(true);
    setTimeout(() => {
      setIsDropping(false);
    }, 250);
    gameRef.current.events.emit('drop');
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const pointerX = event.clientX || 0;
    handlePointerMove(pointerX);
  }
  function handleTouchMove(event: React.TouchEvent<HTMLDivElement>) {
    const pointerX = event.touches[0].clientX || 0;
    handlePointerMove(pointerX);
  }
  const handlePointerMove = useCallback(
    function handlePointerMove(pointerX: number) {
      const x = gameBoundingRect?.x || 0;
      const gameX = pointerX - x;
      setPointerX(gameX);
    },
    [gameBoundingRect?.x, setPointerX]
  );

  const className = cx(css.subakGame, {
    [css.isGameOver]: isGameOver,
    [css.isNotStarted]: !isGameStarted
  });

  return (
    <>
      <div
        className={className}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}>
        <div className={css.innerFrame}>
          <section className={css.hud}>
            <div className={cx(css.nextFruit, css.hudSection)}>
              <h6 className={css.label}>Next</h6>
              <NextFruit nextFruit={nextFruit} />
            </div>

            <div className={cx(css.score, css.hudSection)}>
              <h6 className={css.label}>Score</h6>
              <Score score={score} />
            </div>

            <div className={cx(css.circleOfEvolution, css.hudSection)}>
              <h6 className={css.label}>Cycle</h6>
              <CircleOfEvolution />
            </div>
          </section>

          <section
            className={cx(css.game, { [css.isDropping]: isDropping })}
            ref={gameSectionRef}>
            <Game gameRef={gameRef} />
          </section>
        </div>

        <AnimatePresence>
          <div className={css.dialogs}>
            {isGameOver && <GameOverDialog gameRef={gameRef} />}
            {!isGameStarted && <StartDialog />}
          </div>
        </AnimatePresence>
      </div>
      {isDebugEnabled && <Debug />}
    </>
  );
}
