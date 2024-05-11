import Phaser from 'phaser';

import { getFruitByName } from '../../data/fruits';

import { MainSceneInterface } from '../scenes/main.interface';
import { FruitNameType } from '../../data/fruits';

const FRUIT_FRICTION = 0.5;
const FRUIT_BOUNCE = 0.15;

export class Fruit extends Phaser.Physics.Matter.Image {
  constructor(
    scene: MainSceneInterface,
    x: number,
    y: number,
    fruitName: FruitNameType
  ) {
    super(scene.matter.world, x, y, fruitName);

    const fruit = getFruitByName(fruitName);

    if (!fruit) {
      console.error(
        `Could not create fruit because fruitName "${fruitName}" is invalid.`
      );
      return;
    }

    const fruitRadiusGw = scene.gw(fruit.radius);
    this.setName(fruitName);
    this.setDisplaySize(fruitRadiusGw * 2, fruitRadiusGw * 2);
    this.setCircle(fruitRadiusGw);
    this.setFriction(FRUIT_FRICTION);
    this.setFrictionAir(0.01);
    this.setBounce(FRUIT_BOUNCE);
    this.setDepth(1);

    // newFruit might already be merged at this point
    if (this.active) {
      this.setOnCollideWith(
        scene.ceiling,
        (
          collidingBody: Phaser.Types.Physics.Matter.MatterBody,
          collisionData: Phaser.Types.Physics.Matter.MatterCollisionData
        ) => {
          const { bodyB } = collisionData;
          scene.fruitCollidingWithCeiling.set(bodyB.id, scene.time.now);
        }
      );

      this.setOnCollideEnd(
        (collision: Phaser.Types.Physics.Matter.MatterCollisionData) => {
          if (
            collision.bodyA.id === scene.ceiling.id ||
            collision.bodyB.id === scene.ceiling.id
          ) {
            const collisionFruit =
              collision.bodyA.id === scene.ceiling.id
                ? collision.bodyB
                : collision.bodyA;

            scene.fruitCollidingWithCeiling.delete(collisionFruit.id);
          }
        }
      );
    }
  }
}
