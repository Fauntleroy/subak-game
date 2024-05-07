import css from './game-over-dialog.module.css';

import React from 'react';
import { useStore } from 'zustand';

import store from '../store';

const useBoundStore = (selector) => useStore(store, selector);

export function GameOverDialog({ gameRef }) {
  const setIsGameOver = useBoundStore((state) => state.setIsGameOver);

  function handleRestartButtonClick() {
    gameRef.current.events.emit('reset');
  }

  return (
    <dialog className={css.gameOverDialog} open={true}>
      <h3 className={css.heading}>Game Over</h3>
      <button className={css.restart} onClick={handleRestartButtonClick}>
        Start New Game
      </button>
    </dialog>
  );
}
