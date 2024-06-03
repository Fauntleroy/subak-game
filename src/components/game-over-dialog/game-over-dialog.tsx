import css from './game-over-dialog.module.css';

import { useStore } from 'zustand';

import store from '../../store';

import { Dialog } from '../dialog/dialog';
import { Leaderboard } from '../leaderboard/leaderboard';
import { useTopScores } from '../../hooks/use-top-scores';

export function GameOverDialog({ gameRef }: { gameRef: any }) {
  const score = useStore(store, (state) => state.score);
  const scores = useTopScores();

  function handleRestartButtonClick() {
    gameRef.current.events.emit('reset');
  }

  return (
    <Dialog open={true}>
      <header>Game Over</header>
      <section>Thanks for playing! You did great!</section>
      <section>
        Your score was <strong>{Intl.NumberFormat().format(score)}</strong>
      </section>
      <section>
        <Leaderboard scores={scores} />
      </section>
      <footer>
        <button onClick={handleRestartButtonClick}>Start New Game</button>
      </footer>
    </Dialog>
  );
}
