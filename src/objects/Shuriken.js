import Phaser from "phaser";

export default class Shuriken extends Phaser.Physics.Matter.Sprite {
  constructor(scene, x, y, texture, options) {
    super(scene.matter.world, x, y, texture, 0, options);
    scene.add.existing(this);

    this.setFriction(1, 0.01, Infinity);

    this.startX = x;
    this.startY = y;
  };
}
