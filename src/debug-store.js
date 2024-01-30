import { createStore } from 'zustand/vanilla';

const debugStore = createStore((set) => ({
  overrideFruit: null,
  setOverrideFruit(_overrideFruit) {
    set({ overrideFruit: _overrideFruit });
  },

  disableMerging: 0,
  setDisableMerging(_disableMerging) {
    set({ disableMerging: _disableMerging });
  }
}));

export default debugStore;
