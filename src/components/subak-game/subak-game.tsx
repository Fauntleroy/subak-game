import css from './subak-game.module.css';

import React, { useRef, useState } from 'react';

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

  function handleAppPointerDown(event: React.SyntheticEvent) {
    const pointerX =
      window.TouchEvent && event instanceof TouchEvent
        ? event.touches[0].clientX
        : event instanceof MouseEvent
        ? event.clientX
        : 0;
    const x = gameBoundingRect?.x || 0;
    const gameX = pointerX - x;
    setPointerX(gameX);
  }

  function handleAppPointerUp() {
    if (!gameRef.current) {
      return;
    }
    setIsDropping(true);
    setTimeout(() => {
      setIsDropping(false);
    }, 250);
    gameRef.current.events.emit('drop');
  }

  function handleAppPointerMove(
    event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) {
    const pointerX =
      window.TouchEvent && event instanceof TouchEvent
        ? event.touches[0].clientX
        : event instanceof MouseEvent
        ? event.clientX
        : 0;
    const x = gameBoundingRect?.x || 0;
    const gameX = pointerX - x;
    setPointerX(gameX);
  }

  const className = cx(css.subakGame, {
    [css.isGameOver]: true,
    [css.isNotStarted]: true
  });

  return (
    <>
      <div
        className={className}
        onMouseDown={handleAppPointerDown}
        onTouchStart={handleAppPointerDown}
        onMouseUp={handleAppPointerUp}
        onTouchEnd={handleAppPointerUp}
        onMouseMove={handleAppPointerMove}
        onTouchMove={handleAppPointerMove}>
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

          <section className={cx(css.game, { [css.isDropping]: isDropping })}>
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
