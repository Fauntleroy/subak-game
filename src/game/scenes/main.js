import Phaser from 'phaser';
import { clamp } from 'lodash-es';

import store from '../../store';
import debugStore from '../../debug-store';
import { fruits } from '../../data/fruits';

const EVENTS = {
  CEILING_HIT: 'CEILING_HIT'
};
const FRUIT_FRICTION = 0.5;
const FRUIT_BOUNCE = 0.2;

export class Main extends Phaser.Scene {
  dropper;
  dropLine;
  group;
  ceiling;
  fruitCollidingWithCeiling = new Map();

  // Sizing utils
  gh = (percent) => {
    return this.game.config.height * (percent / 100);
  };
  gw = (percent) => {
    return this.game.config.width * (percent / 100);
  };

  preload() {
    for (const fruit of fruits) {
      this.load.image(`${fruit.name}`, `${fruit.name}.png`);
    }

    this.load.image('fruit-pointer', 'fruit-pointer.png');
  }

  updateDropper(fruit) {
    const fruitDiameter = this.gw(fruit.radius * 2);
    this.dropper
      .setTexture(fruit.name)
      .setName(fruit.name)
      .setDisplaySize(fruitDiameter, fruitDiameter);
    this.setDropperX(this.input.activePointer.x || this.gw(50));

    this.group.getChildren().forEach((gameObject) => {
      if (gameObject instanceof Phaser.GameObjects.Image) {
        gameObject.postFX.clear();

        if (gameObject.name === fruit.name) {
          gameObject.postFX.addShine();
        }
      }
    });
  }

  setDropperX(x) {
    const padding = 0;
    const radius = this.dropper.displayWidth / 2;
    const clampedX = clamp(
      x,
      radius + padding,
      this.game.config.width - radius - padding
    );
    this.dropper.setX(clampedX);
    this.dropLine.setX(clampedX);
    this.dropPointer.setX(clampedX);
  }

  addFruit(x, y, fruit) {
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
        (collidingBody, collisionData) => {
          const { bodyB } = collisionData;
          this.fruitCollidingWithCeiling.set(bodyB.id, this.time.now);
        }
      );

      newFruit.setOnCollideEnd((collision) => {
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
      });
    }

    return newFruit;
  }

  setUpcomingFruit(fruit) {
    this.state.setUpcomingFruit(fruit);
  }

  setScore(score) {
    this.state.setScore(score);
  }

  subscribeToStores = () => {
    // subscribe to external app store
    store.subscribe(this.handleStoreChange);
    this.state = store.getState();
    debugStore.subscribe(this.handleDebugStoreChange);
    this.debugState = debugStore.getState();
  };

  handleStoreChange = (newState) => {
    this.state = newState;
  };

  handleDebugStoreChange = (newState) => {
    this.debugState = newState;
  };

  create() {
    this.subscribeToStores();

    this.matter.world.setBounds(0, 0, this.gw(100), this.gh(100));
    this.group = this.add.group();

    const light = this.lights
      .addLight(
        this.input.activePointer.x,
        this.input.activePointer.y,
        1000,
        0xffffff,
        0.75
      )
      .setScrollFactor(0);
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
    const dropperHeight = ceilingHeight / 2;
    this.dropper = this.add
      .image(this.input.activePointer.x, 0, fruits[0].name)
      .setY(dropperHeight);

    this.dropPointer = this.add
      .image(0, this.gw(1.5), 'fruit-pointer')
      .setDisplaySize(this.gw(4), this.gw(3));

    this.dropLine = this.add
      .rectangle(0, this.gh(1), 2, this.gh(100), 0x000000)
      .setOrigin(0)
      .setAlpha(0.1)
      .setDepth(-2);

    this.updateDropper(fruits[0]);
    this.setUpcomingFruit(fruits[Math.floor(Math.random() * 5)]);

    // Game events
    this.input.on('pointermove', (pointer) => {
      this.setDropperX(pointer.x);
      light.setPosition(pointer.x, pointer.y);
    });

    this.input.on('pointerup', () => {
      if (!this.dropper.visible || this.state.isGameOver) {
        return;
      }

      this.dropper.setVisible(false);
      this.time.delayedCall(500, () =>
        this.dropper.setVisible(!this.state.isGameOver)
      );

      const currentFruit = fruits.find(
        (fruit) => fruit.name === this.dropper.name
      );

      const gameObject = this.addFruit(
        this.dropper.x,
        this.dropper.y,
        currentFruit
      );
      this.group.add(gameObject);

      this.updateDropper(this.state.upcomingFruit);
      this.setUpcomingFruit(
        this.debugState.overrideFruit || fruits[Math.floor(Math.random() * 5)]
      );
    });

    this.matter.world.on('collisionstart', (event) => {
      if (this.debugState.disableMerging) {
        return;
      }

      for (const pair of event.pairs) {
        if (pair.bodyA.gameObject?.name === pair.bodyB.gameObject?.name) {
          const fruitIndex = fruits.findIndex(
            (fruit) => fruit.name === pair.bodyA.gameObject?.name
          );

          if (fruitIndex === -1) {
            continue;
          }

          const fruitScore = (fruitIndex + 1) * 2;
          this.setScore(this.state.score + fruitScore);

          pair.bodyA.gameObject.destroy();
          pair.bodyB.gameObject.destroy();

          const newFruit = fruits[fruitIndex + 1];

          if (!newFruit) {
            continue;
          }

          const averagedPositionX =
            (pair.bodyA.position.x + pair.bodyB.position.x) / 2;
          const averagedPositionY =
            (pair.bodyA.position.y + pair.bodyB.position.y) / 2;

          const gameObject = this.addFruit(
            averagedPositionX,
            averagedPositionY,
            newFruit
          );
          this.group.add(gameObject);

          return;
        }
      }
    });

    this.events.on(EVENTS.CEILING_HIT, () => {
      this.state.setIsGameOver(true);
      this.dropper.setVisible(false);
      this.fruitCollidingWithCeiling.clear();
      this.matter.world.pause();
    });

    this.game.events.on('reset', () => {
      this.setScore(0);
      this.state.setIsGameOver(false);
      this.matter.world.resume();
      this.scene.restart();
    });
  }

  update(time) {
    this.fruitCollidingWithCeiling.forEach((collisionStartTime) => {
      if (time - collisionStartTime >= 500) {
        this.events.emit(EVENTS.CEILING_HIT);
      }
    });
  }
}
