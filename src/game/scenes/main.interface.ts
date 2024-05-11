import MatterJS from 'matter';

import { FruitNameType, FruitType } from '../../data/fruits';
import { StoreState } from '../../store';
import { DebugStoreState } from '../../debug-store';
import { Fruit } from '../objects/fruit';

export interface MainSceneInterface {
  dropper: Phaser.GameObjects.Image;
  dropPointer: Phaser.GameObjects.Image;
  dropLine: Phaser.GameObjects.Rectangle;
  dropperGroup: Phaser.GameObjects.Group;
  group: Phaser.GameObjects.Group;
  ceiling: MatterJS.BodyType;
  fruitCollidingWithCeiling: Map<number, number>;
  state: StoreState;
  debugState: DebugStoreState;
  physicsTimeAccumulator: number;

  // Methods
  gh(percent: number): number;
  gw(percent: number): number;
  preload(): void;
  updateDropper(fruit: FruitType): void;
  setDropperX(x: number): void;
  addFruit(x: number, y: number, fruitName: FruitNameType): Fruit;
  setUpcomingFruit(fruit: FruitType): void;
  mergeFruit(
    fruitBodyA: MatterJS.BodyType,
    fruitBodyB: MatterJS.BodyType
  ): void;
  setScore(score: number): void;
  subscribeToStores(): void;
  handleStoreChange(newState: StoreState): void;
  handleDebugStoreChange(newState: DebugStoreState): void;
  handlePointerMove(pointer: Phaser.Input.Pointer): void;
  handleDrop(): void;
  handleCollision(
    event: Phaser.Physics.Matter.Events.CollisionStartEvent
  ): void;
  handleCollisionActive(
    event: Phaser.Physics.Matter.Events.CollisionStartEvent
  ): void;
  handleCeilingHit(): void;
  handleReset(): void;
  create(): void;
  updatePhysics(time: number, delta: number): void;
  update(time: number, delta: number): void;

  // Phaser stuff
  matter: Phaser.Physics.Matter.MatterPhysics;
  time: Phaser.Time.Clock;
}
