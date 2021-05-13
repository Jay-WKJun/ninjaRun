import Phaser from "phaser";

import Character from "../objects/Character";
import { GAMEOVER_SCENE } from "../constants/scenes";
import { CHARACTER_DEAD, STUN } from "../constants/textureNames";

export default class GameOverScene extends Phaser.Scene {
  constructor(parent, width, height) {
    super(GAMEOVER_SCENE);

    this.parent = parent;
    this.worldWidth = width;
    this.worldHeigth = height;
    this.worldCenter = { x: width / 2, y: height / 2 };
  }

  create() {
    this.cameras.main.setBackgroundColor("rgba(0, 0, 0, 0.5)");

    const deadCharacter = new Character(this, this.worldCenter.x, this.worldCenter.y, CHARACTER_DEAD, { isStatic: true });

    const animationKey1 = "stunAnimation";
    this.anims.create({
      key: animationKey1,
      frames: this.anims.generateFrameNames("stun", {
        start: 1,
        end: 4,
        prefix: "stun",
        zeroPad: 2,
        suffix: ".png",
      }),
      frameRate: 4,
      repeat: -1,
    });

    this.stun = this.add.sprite(this.worldCenter.x, this.worldCenter.y - deadCharacter.displayHeight, STUN).setScale(0.2);
    this.stun.play(animationKey1);
  }

  refresh() {
    this.cameras.main.setPosition(this.parent.x, this.parent.y);

    this.scene.bringToTop();
  }
}
