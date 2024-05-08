import { createStore } from 'zustand/vanilla';

const store = createStore((set) => ({
  isGameOver: false,
  setIsGameOver(_isGameOver: boolean) {
    set({ isGameOver: _isGameOver });
  },

  upcomingFruit: null,
  setUpcomingFruit(_upcomingFruit: any) {
    set({ upcomingFruit: { ..._upcomingFruit, uuid: crypto.randomUUID() } });
  },

  score: 0,
  setScore(_newScore: number) {
    set({ score: _newScore });
  },

  isMenuOpen: true,
  setIsMenuOpen(newMenuOpenStatus: boolean) {
    set({ isMenuOpen: newMenuOpenStatus });
  },

  isStarted: false,
  setIsStarted(newIsStarted: boolean = true) {
    set({ isStarted: newIsStarted });
  }
}));

export default store;
