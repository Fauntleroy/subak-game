import React from 'react';

import { Dialog } from '../dialog/dialog';

export function GameOverDialog({ gameRef }) {
  function handleRestartButtonClick() {
    gameRef.current.events.emit('reset');
  }

  return (
    <Dialog open={true}>
      <header>Game Over</header>
      <section>
        Thanks for playing! You did great! Come back later get your name on the
        leaderboard once I've implemented it.
      </section>
      <footer>
        <button onClick={handleRestartButtonClick}>Start New Game</button>
      </footer>
    </Dialog>
  );
}
