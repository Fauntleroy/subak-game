import Phaser from 'phaser';
import { clamp } from 'lodash-es';

import store, { StoreState } from '../../store';
import debugStore, { DebugStoreState } from '../../debug-store';
import { FruitType, fruits } from '../../data/fruits';

const EVENTS = {
  CEILING_HIT: 'CEILING_HIT'
};
const FRUIT_FRICTION = 0.5;
const FRUIT_BOUNCE = 0.2;

export class Main extends Phaser.Scene {
  dropper: Phaser.GameObjects.Image;
  dropPointer: Phaser.GameObjects.Image;
  dropLine: Phaser.GameObjects.Rectangle;
  dropperGroup: Phaser.GameObjects.Group;
  group: Phaser.GameObjects.Group;
  ceiling: MatterJS.BodyType;
  fruitCollidingWithCeiling: Map<number, number> = new Map();
  state: StoreState;
  debugState;

  // Sizing utils
  gh = (percent: number) => {
    return Number(this.game.config.height) * (percent / 100);
  };
  gw = (percent: number) => {
    return Number(this.game.config.width) * (percent / 100);
  };

  preload() {
    for (const fruit of fruits) {
      this.load.image(`${fruit.name}`, `${fruit.name}.png`);
    }

    this.load.image('fruit-pointer', 'fruit-pointer.png');
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

  addFruit(x: number, y: number, fruit: FruitType) {
    const fruitRadiusGw = this.gw(fruit.radius);
    const newFruit = this.matter.add
      .image(x, y, fruit.name)
      .setName(fruit.name)
      .setDisplaySize(fruitRadiusGw * 2, fruitRadiusGw * 2)
      .setCircle(fruitRadiusGw)
      .setFriction(FRUIT_FRICTION)
      .setBounce(FRUIT_BOUNCE)
      .setDepth(-1);

    // newFruit might already be merged at this point
    if (newFruit.active) {
      newFruit.setOnCollideWith(
        this.ceiling,
        (
          collidingBody,
          collisionData: Phaser.Types.Physics.Matter.MatterCollisionData
        ) => {
          const { bodyB } = collisionData;
          this.fruitCollidingWithCeiling.set(bodyB.id, this.time.now);
        }
      );

      newFruit.setOnCollideEnd(
        (collision: Phaser.Types.Physics.Matter.MatterCollisionData) => {
          if (
            collision.bodyA.id === this.ceiling.id ||
            collision.bodyB.id === this.ceiling.id
          ) {
            const collisionFruit =
              collision.bodyA.id === this.ceiling.id
                ? collision.bodyB
                : collision.bodyA;

            this.fruitCollidingWithCeiling.delete(collisionFruit.id);
          }
        }
      );
    }

    return newFruit;
  }

  setUpcomingFruit(fruit: FruitType) {
    this.state.setUpcomingFruit(fruit);
  }

  mergeFruit(fruitBodyA: MatterJS.BodyType, fruitBodyB: MatterJS.BodyType) {
    const fruitIndex = fruits.findIndex(
      (fruit) => fruit.name === fruitBodyA.gameObject?.name
    );

    const fruitScore = (fruitIndex + 1) * 2;
    this.setScore(this.state.score + fruitScore);

    fruitBodyA.gameObject.destroy();
    fruitBodyB.gameObject.destroy();

    const newFruit = fruits[fruitIndex + 1];

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
      newFruit
    );
    this.group.add(gameObject);
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

  handlePointerUp = () => {
    if (
      this.state.isGameOver ||
      !this.state.isStarted ||
      !this.dropper.visible
    ) {
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

    const currentFruit = fruits.find(
      (fruit) => fruit.name === this.dropper.name
    );

    if (!currentFruit) {
      console.error(`No fruit found for value: "${this.dropper.name}"`);
      return;
    }

    const gameObject = this.addFruit(
      this.dropper.x,
      this.dropper.y,
      currentFruit
    );
    this.group.add(gameObject);

    this.setUpcomingFruit(
      this.debugState.overrideFruit || fruits[Math.floor(Math.random() * 5)]
    );
  };

  handleCollisionStart = (
    event: Phaser.Physics.Matter.Events.CollisionStartEvent
  ) => {
    if (this.debugState.disableMerging) {
      return;
    }

    for (const pair of event.pairs) {
      if (pair.bodyA.gameObject?.name === pair.bodyB.gameObject?.name) {
        // get and store references here
        const fruitBodyA = pair.bodyA;
        const fruitBodyB = pair.bodyB;
        this.mergeFruit(fruitBodyA, fruitBodyB);
      }
    }
  };

  handleCeilingHit = () => {
    this.state.setIsGameOver(true);
    this.dropper.setVisible(false);
    this.fruitCollidingWithCeiling.clear();
    this.matter.world.pause();
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

    const line = this.add
      .rectangle(0, ceilingHeight, this.gw(100), 2, 0x000000)
      .setOrigin(0)
      .setAlpha(0.125)
      .setDepth(-2);

    // create dropper
    this.dropperGroup = this.add.group();

    const dropperHeight = ceilingHeight / 2;
    this.dropper = this.add
      .image(this.input.activePointer.x, 0, fruits[0].name)
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

    this.updateDropper(fruits[0]);
    this.setUpcomingFruit(fruits[Math.floor(Math.random() * 5)]);

    this.input.on('pointermove', this.handlePointerMove);
    this.input.on('pointerup', this.handlePointerUp);
    // this.input.on('pointerupoutside', this.handlePointerUp);

    this.matter.world.on('collisionstart', this.handleCollisionStart);

    this.events.on(EVENTS.CEILING_HIT, this.handleCeilingHit);

    this.game.events.on('reset', this.handleReset);
  }

  update(time) {
    this.fruitCollidingWithCeiling.forEach((collisionStartTime: number) => {
      if (time - collisionStartTime >= 500) {
        this.events.emit(EVENTS.CEILING_HIT);
      }
    });
  }
}
