import css from './leaderboard-dialog.module.css';

import React from 'react';
import { useStore } from 'zustand';

import store from '../../store';

import { Dialog } from '../dialog/dialog';
import { Leaderboard } from '../leaderboard/leaderboard';

export function LeaderboardDialog({ gameRef }) {
  const setIsLeaderboardOpen = useStore(
    store,
    (state) => state.setIsLeaderboardOpen
  );

  function handleCloseLeaderboardClick() {
    setIsLeaderboardOpen(false);
  }

  return (
    <Dialog open={true}>
      <header>Leaderboard</header>
      <section className={css.content}>
        <Leaderboard />
      </section>
      <footer>
        <button onClick={handleCloseLeaderboardClick}>Return to Game</button>
      </footer>
    </Dialog>
  );
}
