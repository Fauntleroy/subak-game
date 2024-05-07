import { createStore } from 'zustand/vanilla';

const store = createStore((set) => ({
  isGameOver: false,
  setIsGameOver(_isGameOver) {
    set({ isGameOver: _isGameOver });
  },

  upcomingFruit: null,
  setUpcomingFruit(_upcomingFruit) {
    set({ upcomingFruit: { ..._upcomingFruit, uuid: crypto.randomUUID() } });
  },

  score: 0,
  setScore(_newScore) {
    set({ score: _newScore });
  }
}));

export default store;
