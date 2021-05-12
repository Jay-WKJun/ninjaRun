import Phaser from "phaser";

import { GAMEOVER_SCENE } from "../constants/scenes";
import { CHARACTER } from "../constants/textureNames";

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
    this.add.sprite(this.worldCenter.x, this.worldCenter.y, CHARACTER).setOrigin(0.5).setScale(0.3);
  }

  refresh() {
    this.cameras.main.setPosition(this.parent.x, this.parent.y);

    this.scene.bringToTop();
  }
}
