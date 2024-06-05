import Phaser from 'phaser';
import { clamp, throttle } from 'lodash-es';

import { MainSceneInterface } from './main.interface';
import store, { StoreState } from '../../store';
import debugStore, { DebugStoreState } from '../../debug-store';
import {
  FruitType,
  FruitNameType,
  fruitNames,
  getFruitByIndex,
  getFruitByName,
  getNextFruitByName,
  getRandomFruit
} from '../../data/fruits';
import { subakGameIndexedDb } from '../../indexed-db/score-db';
import { Fruit } from '../objects/fruit';
import { RippleEffect } from '../objects/ripple-effect';

export const EVENTS = {
  CEILING_HIT: 'CEILING_HIT',
  DROP: 'DROP'
};

export class Main extends Phaser.Scene implements MainSceneInterface {
  dropper: Phaser.GameObjects.Image;
  dropPointer: Phaser.GameObjects.Image;
  dropLine: Phaser.GameObjects.Rectangle;
  dropperGroup: Phaser.GameObjects.Group;
  group: Phaser.GameObjects.Group;
  ceiling: MatterJS.BodyType;
  fruitCollidingWithCeiling: Map<number, number> = new Map();
  state: StoreState;
  debugState;
  physicsTimeAccumulator: number = 0;

  // Sizing utils
  gh = (percent: number) => {
    return Number(this.game.config.height) * (percent / 100);
  };
  gw = (percent: number) => {
    return Number(this.game.config.width) * (percent / 100);
  };

  preload() {
    for (const fruitName of fruitNames) {
      this.load.image(`${fruitName}`, `${fruitName}.png`);
    }

    this.load.image('fruit-pointer', 'fruit-pointer.png');
  }

  isGameActive() {
    return !this.state.isGameOver && this.state.isStarted;
  }

  updateDropper(fruit: FruitType) {
    const fruitDiameter = this.gw(fruit.radius * 2);
    this.dropper
      .setTexture(fruit.name)
      .setName(fruit.name)
      .setDisplaySize(fruitDiameter, fruitDiameter);
    this.setDropperX(this.input.activePointer.x || this.gw(50));
    this.tweens.add({
      targets: this.dropper,
      scale: { from: this.dropper.scale * 0.25, to: this.dropper.scale },
      alpha: { from: 0, to: 1 },
      ease: 'Elastic',
      easeParams: [0.01, 0.5],
      duration: 325
    });

    this.group.getChildren().forEach((gameObject) => {
      if (gameObject instanceof Phaser.GameObjects.Image) {
        gameObject.postFX.clear();

        if (gameObject.name === fruit.name) {
          gameObject.postFX.addShine();
        }
      }
    });
  }

  setDropperX(x: number) {
    const padding = 0;
    const radius = this.dropper.displayWidth / 2;
    const clampedX = clamp(
      x,
      radius + padding,
      Number(this.game.config.width) - radius - padding
    );
    this.dropperGroup.setX(clampedX);
  }

  addFruit(x: number, y: number, fruitName: FruitNameType): Fruit {
    const newFruit = new Fruit(this, x, y, fruitName);
    this.add.existing(newFruit);

    return newFruit;
  }

  setUpcomingFruit(fruit: FruitType) {
    this.state.setUpcomingFruit(fruit);
  }

  mergeFruit(fruitBodyA: MatterJS.BodyType, fruitBodyB: MatterJS.BodyType) {
    if (!fruitBodyA.gameObject) {
      console.error(
        'mergeFruit requires two bodies with references to a gameObject'
      );
      return;
    }

    const mergingFruitName = fruitBodyA.gameObject.name;
    const fruitData = getFruitByName(mergingFruitName);

    if (!fruitData) {
      console.error(
        `No fruit data matches fruit with name "${mergingFruitName}"`
      );
      return;
    }

    this.setScore(this.state.score + fruitData.points);

    fruitBodyA.gameObject.destroy();
    fruitBodyB.gameObject.destroy();

    const newFruit = getNextFruitByName(mergingFruitName);

    if (!newFruit) {
      return;
    }

    const averagedPositionX =
      (fruitBodyA.position.x + fruitBodyB.position.x) / 2;
    const averagedPositionY =
      (fruitBodyA.position.y + fruitBodyB.position.y) / 2;

    const gameObject = this.addFruit(
      averagedPositionX,
      averagedPositionY,
      newFruit.name
    );
    this.group.add(gameObject);

    //effect
    const rippleEffect = new RippleEffect(
      this,
      averagedPositionX,
      averagedPositionY,
      this.gw(newFruit.radius)
    );
    this.add.existing(rippleEffect);
  }

  setScore(score: number) {
    this.state.setScore(score);
  }

  subscribeToStores = () => {
    // subscribe to external app store
    store.subscribe(this.handleStoreChange);
    this.state = store.getState();
    debugStore.subscribe(this.handleDebugStoreChange);
    this.debugState = debugStore.getState();
  };

  async endGame() {
    // game is already over, do nothing
    if (this.state.isGameOver) return false;

    this.state.setIsGameOver(true);
    this.dropper.setVisible(false);
    this.fruitCollidingWithCeiling.clear();
    const newScoreId = await subakGameIndexedDb.scores.add({
      name: '???',
      points: this.state.score,
      time: Date.now() - this.state.startTime,
      createdAt: new Date()
    });
    this.state.setNewScoreId(newScoreId);
  }

  handleStoreChange = (newState: StoreState) => {
    this.state = newState;
  };

  handleDebugStoreChange = (newState: DebugStoreState) => {
    this.debugState = newState;
  };

  handlePointerMove = (pointer: Phaser.Input.Pointer) => {
    if (this.state.isGameOver || !this.state.isStarted) {
      return;
    }

    this.setDropperX(pointer.x);
  };

  handleDrop = () => {
    if (!this.isGameActive() || !this.dropper.visible) {
      return;
    }

    const upcomingFruit = this.state.upcomingFruit;

    if (!upcomingFruit) {
      console.error('No upcoming fruit found.');
      return;
    }

    this.dropper.setVisible(false);
    this.time.delayedCall(500, () => {
      this.dropper.setVisible(!this.state.isGameOver);
      this.updateDropper(upcomingFruit);
    });

    const currentFruit = getFruitByName(this.dropper.name);

    if (!currentFruit) {
      console.error(`No fruit found for value: "${this.dropper.name}"`);
      return;
    }

    const gameObject = this.addFruit(
      this.dropper.x,
      this.dropper.y,
      currentFruit.name
    );
    this.group.add(gameObject);

    const newUpcomingFruit = getRandomFruit();
    this.setUpcomingFruit(this.debugState.overrideFruit || newUpcomingFruit);
  };

  handleCollision = (
    event: Phaser.Physics.Matter.Events.CollisionStartEvent
  ) => {
    if (this.debugState.disableMerging) {
      return;
    }

    for (const pair of event.pairs) {
      if (!pair.bodyA.gameObject || !pair.bodyA.gameObject) {
        continue;
      }

      if (pair.bodyA.gameObject?.name === pair.bodyB.gameObject?.name) {
        // get and store references here
        const fruitBodyA = pair.bodyA;
        const fruitBodyB = pair.bodyB;
        this.mergeFruit(fruitBodyA, fruitBodyB);
      }
    }
  };

  handleCollisionActive = throttle(this.handleCollision, 500);

  handleCeilingHit = () => {
    this.endGame();
  };

  handleReset = () => {
    this.setScore(0);
    this.state.setIsGameOver(false);
    this.matter.world.resume();
    this.scene.restart();
  };

  create() {
    this.subscribeToStores();

    this.matter.world.setBounds(0, 0, this.gw(100), this.gh(100));
    this.group = this.add.group();

    this.lights.enable().setAmbientColor(0xffffff);

    // Game ceiling & out of bounds
    const ceilingHeight = this.gh(100 / 6);
    this.ceiling = this.matter.add.rectangle(
      this.gw(50),
      ceilingHeight / 2,
      this.gw(100),
      ceilingHeight,
      { label: 'ceiling', isSensor: true, isStatic: true }
    );

    this.add
      .rectangle(0, ceilingHeight, this.gw(100), 2, 0x000000)
      .setOrigin(0)
      .setAlpha(0.125)
      .setDepth(-2);

    // create dropper
    this.dropperGroup = this.add.group();

    const dropperHeight = ceilingHeight / 2;
    const firstFruit = getFruitByIndex(0);

    this.dropper = this.add
      .image(this.input.activePointer.x, 0, firstFruit.name)
      .setY(dropperHeight);

    this.dropPointer = this.add
      .image(0, this.gw(1.5), 'fruit-pointer')
      .setAlpha(0.5)
      .setDisplaySize(this.gw(5), this.gw(5));

    this.dropLine = this.add
      .rectangle(0, this.gh(1), 2, this.gh(100), 0x000000)
      .setOrigin(0)
      .setAlpha(0.1)
      .setDepth(-2);

    this.dropperGroup.add(this.dropper);
    this.dropperGroup.add(this.dropPointer);
    this.dropperGroup.add(this.dropLine);

    this.updateDropper(firstFruit);
    const upcomingFruit = getRandomFruit();
    this.setUpcomingFruit(upcomingFruit);

    this.matter.world.on('collisionstart', this.handleCollision);
    this.matter.world.on('collisionactive', this.handleCollisionActive);

    this.events.on(EVENTS.CEILING_HIT, this.handleCeilingHit);

    this.game.events.on('drop', this.handleDrop);
    this.game.events.on('reset', this.handleReset);
  }

  updatePhysics(time: number, delta: number) {
    const { deltaMin = 0 } = this.matter.world.runner;
    this.physicsTimeAccumulator += delta;

    while (this.physicsTimeAccumulator >= deltaMin) {
      this.matter.step(deltaMin);
      this.physicsTimeAccumulator -= deltaMin;
    }
  }

  update(time: number, delta: number) {
    if (!this.isGameActive()) {
      return;
    }

    this.updatePhysics(time, delta);

    this.fruitCollidingWithCeiling.forEach((collisionStartTime: number) => {
      if (time - collisionStartTime >= 500) {
        this.events.emit(EVENTS.CEILING_HIT);
      }
    });

    // set pointer x
    this.setDropperX(this.state.pointerX * window.devicePixelRatio);
  }
}
