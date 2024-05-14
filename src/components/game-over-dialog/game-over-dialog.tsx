import React, { useState } from 'react';
import { useStore } from 'zustand';

import store from '../../store';
import { subakGameIndexedDb } from '../../indexed-db/score-db';

import { Dialog } from '../dialog/dialog';
import { Leaderboard } from '../leaderboard/leaderboard';

export function GameOverDialog({ gameRef }) {
  const [name, setName] = useState('');
  const score = useStore(store, (state) => state.score);
  const startTime = useStore(store, (state) => state.startTime);

  function handleRestartButtonClick() {
    gameRef.current.events.emit('reset');
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmitScore(event) {
    event.preventDefault();
    console.log(
      'submit score',
      name,
      score,
      Date.now() - startTime,
      new Date()
    );
    subakGameIndexedDb.scores.add({
      name,
      points: score,
      time: Date.now() - startTime,
      createdAt: new Date()
    });
  }

  return (
    <Dialog open={true}>
      <header>Game Over</header>
      <section>Thanks for playing! You did great!</section>
      <section>
        <form onSubmit={handleSubmitScore}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="???"
            maxLength={3}
          />
          <button type="submit">Submit Score</button>
        </form>
        <Leaderboard />
      </section>
      <footer>
        <button onClick={handleRestartButtonClick}>Start New Game</button>
      </footer>
    </Dialog>
  );
}
