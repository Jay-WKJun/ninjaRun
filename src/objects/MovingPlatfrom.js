import Phaser from "phaser";

export default class MovingPlatform extends Phaser.Physics.Matter.Image {
  constructor(scene, x, y, texture, options) {
    super(scene.matter.world, x, y, texture, 0, options);
    scene.add.existing(this);

    this.setFriction(1, 0, Infinity);

    this.startX = x;
    this.startY = y;
  };

  moveHorizontally() {
    this.scene.tweens.addCounter({
      from: 0,
      to: -1800,
      duration: 15000,
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
};
