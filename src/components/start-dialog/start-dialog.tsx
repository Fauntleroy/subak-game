import css from './start-dialog.module.css';

import React from 'react';
import { useStore } from 'zustand';

import store from '../../store';

import { Dialog } from '../dialog/dialog';
import { Leaderboard } from '../leaderboard/leaderboard';

export function StartDialog() {
  const setIsStarted = useStore(store, (state) => state.setIsStarted);

  function handleStartClick() {
    setIsStarted(true);
  }

  return (
    <Dialog open={true}>
      <header>
        Subak Game <img className={css.subakIcon} src="./watermelon.png" />
      </header>
      <section>
        Match fruits to merge them into a bigger fruit. Try to get to a{' '}
        <img className={css.subakIcon} src="./watermelon.png" />.
      </section>
      <section>
        <Leaderboard />
      </section>
      <footer>
        <button type="button" onClick={handleStartClick}>
          Start Game
        </button>
      </footer>
    </Dialog>
  );
}
