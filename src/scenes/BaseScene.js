import Phaser from "phaser";

import { BACKGOURND } from "../constants/textureNames";

class BaseScene extends Phaser.Scene {
  constructor(key, config) {
    super(key);
    this.config = config;
    this.screenCenter = [config.width / 2, config.height / 2];
    this.fontSize = 34;
    this.fontOptions = { fontSize: `${this.fontSize}px`, fill: "#FFFFFF" };
  }

  create() {
    this.background = this.add.image(0, 0, BACKGOURND)
      .setScale(0.6)
      .setOrigin(0);
  }
}

export default BaseScene;
