import Phaser from "phaser";

import { CHARACTER } from "../constants/textureNames";

export default class Character extends Phaser.Physics.Matter.Sprite {
  constructor(scene, x, y, options) {
    super(scene.matter.world, x, y, CHARACTER, 0, options);
    scene.add.existing(this);

    this.setOrigin(0.5);
    this.setScale(0.3);
    this.setFriction(1, 0.01, Infinity);

    this.startX = x;
    this.startY = y;
  };
}
