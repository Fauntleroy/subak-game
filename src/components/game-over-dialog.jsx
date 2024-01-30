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
    <dialog open={true}>
      <h3>Game Over</h3>
      <button onClick={handleRestartButtonClick}>Start New Game</button>
    </dialog>
  );
}
