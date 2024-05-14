import Dexie, { Table } from 'dexie';

export interface ScoreType {
  id?: number;
  name: string;
  points: number;
  time: number;
  createdAt: Date;
}

export class SubakDexie extends Dexie {
  // 'scores' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  scores!: Table<ScoreType>;

  constructor() {
    super('subak-game');
    this.version(1).stores({
      scores: '++id, name, points, time, createdAt' // Primary key and indexed props
    });
  }
}

export const subakGameIndexedDb = new SubakDexie();
