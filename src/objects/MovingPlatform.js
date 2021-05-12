import Phaser from "phaser";

import { PLATFORM } from "../constants/textureNames";

export default class MovingPlatform extends Phaser.Physics.Matter.Sprite {
  constructor(scene, x, y, options) {
    super(scene.matter.world, x, y, PLATFORM, 0, options);
    scene.add.existing(this);

    this.setScale(0.3);
    this.setFriction(1, 0, Infinity);

    this.startX = x;
    this.startY = y;
  };

  moveHorizontally() {
    this.tweenCounter = this.scene.tweens.addCounter({
      from: 0,
      to: -10000,
      duration: 100000,
      ease: 0,
      repeat: 0,
      yoyo: false,
      onUpdate: (tween, target) => {
        const x = this.startX + target.value;
        const dx = x - this.x;
        this.x = x;
        this.setVelocityX(dx);
      },
    });
  }

  removeCounter() {
    this.scene.tweens.remove(this.tweenCounter);
  }
};
