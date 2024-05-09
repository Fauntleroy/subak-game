import { createStore } from 'zustand/vanilla';
import { FruitType } from './data/fruits';

export interface DebugStoreState {
  overrideFruit: null | FruitType;
  setOverrideFruit: (overrideFruit: FruitType) => void;
  disableMerging: boolean;
  setDisableMerging: (disableMerging: boolean) => void;
}

const debugStore = createStore<DebugStoreState>((set) => ({
  overrideFruit: null,
  setOverrideFruit(_overrideFruit) {
    set({ overrideFruit: _overrideFruit });
  },

  disableMerging: false,
  setDisableMerging(_disableMerging) {
    set({ disableMerging: _disableMerging });
  }
}));

export default debugStore;
