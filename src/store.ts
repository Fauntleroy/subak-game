import { createStore } from 'zustand/vanilla';

interface Fruit {
  name: string;
  radius: number;
  uuid: string;
}

interface StoreState {
  isGameOver: boolean;
  setIsGameOver: (isGameOver: boolean) => void;
  upcomingFruit: null | Fruit;
  setUpcomingFruit: (upcomingFruit: Fruit) => void;
  score: number;
  setScore: (score: number) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isStarted: boolean;
  setIsStarted: (isStarted: boolean) => void;
}

const store = createStore<StoreState>((set) => ({
  isGameOver: false,
  setIsGameOver(isGameOver: boolean) {
    set({ isGameOver: isGameOver });
  },

  upcomingFruit: null,
  setUpcomingFruit(upcomingFruit: any) {
    set({ upcomingFruit: { ...upcomingFruit, uuid: crypto.randomUUID() } });
  },

  score: 0,
  setScore(score: number) {
    set({ score });
  },

  isMenuOpen: true,
  setIsMenuOpen(isMenuOpen: boolean) {
    set({ isMenuOpen });
  },

  isStarted: false,
  setIsStarted(isStarted: boolean = true) {
    set({ isStarted });
  }
}));

export default store;
