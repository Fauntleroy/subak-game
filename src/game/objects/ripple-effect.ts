import Phaser from 'phaser';

export class RippleEffect extends Phaser.GameObjects.Arc {
  constructor(scene: Phaser.Scene, x: number, y: number, radius: number) {
    super(scene, x, y, radius);
    this.setStrokeStyle(1, 0x0000000, 0.5);
    this.setDepth(0);

    scene.tweens.add({
      targets: this,
      radius: radius * 4 + 50,
      alpha: 0,
      ease: 'Quad.Out',
      duration: 1000,
      onComplete: () => {
        this.destroy();
      }
    });
  }
}
