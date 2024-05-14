import { createStore } from 'zustand/vanilla';

import { FruitType } from './data/fruits';

export interface NextFruitType extends FruitType {
  uuid: string;
}

export interface StoreState {
  isGameOver: boolean;
  setIsGameOver: (isGameOver: boolean) => void;
  upcomingFruit: null | NextFruitType;
  setUpcomingFruit: (upcomingFruit: FruitType) => void;
  score: number;
  setScore: (score: number) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isStarted: boolean;
  setIsStarted: (isStarted: boolean) => void;
  pointerX: number;
  setPointerX: (x: number) => void;
  isLeaderboardOpen: boolean;
  setIsLeaderboardOpen: (isLeaderboardOpen: boolean) => void;
}

const store = createStore<StoreState>((set) => ({
  isGameOver: false,
  setIsGameOver(isGameOver: boolean) {
    set({ isGameOver: isGameOver });
  },

  upcomingFruit: null,
  setUpcomingFruit(upcomingFruit) {
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
  },

  pointerX: 0,
  setPointerX(x: number) {
    set({ pointerX: x });
  },

  isLeaderboardOpen: false,
  setIsLeaderboardOpen(isLeaderboardOpen: boolean) {
    set({ isLeaderboardOpen });
  }
}));

export default store;
