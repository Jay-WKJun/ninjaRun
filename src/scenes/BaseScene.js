import Phaser from "phaser";

import Background from "../objects/Background";
import { BACKGOURND } from "../constants/textureNames";

class BaseScene extends Phaser.Scene {
  constructor(key, config) {
    super(key);
    this.worldWidth = config.width;
    this.worldHeight = config.height;
    this.worldCenter = { x: config.width / 2, y: config.height };

    this.fontSize = 34;
    this.fontOptions = { fontSize: `${this.fontSize}px`, fill: "#FFFFFF" };

    this.backgroundScenes = [];
  }

  create() {
    for (let i = 0; i < 3; i++) {
      const backgroundXPosition = 0 + (this.worldWidth * i);

      this.createBackground(backgroundXPosition);
    }
  }

  createBackground(xPosition) {
    this.background = new Background(this, xPosition, 0, BACKGOURND, { isStatic: true })
      .setScale(0.6)
      .setOrigin(0);

    this.background.moveHorizontally();
    this.background.setIgnoreGravity(true);
    this.background.depth = -1;

    this.background.body.collisionFilter = {
      group: -1,
    };

    this.backgroundScenes.push(this.background);
  }
}

export default BaseScene;
