import Phaser from "phaser";

import { GAME_START_COUNT_SCENE } from "../../constants/scenes";

export default class GameStartCountScene extends Phaser.Scene {
  constructor(parent, zone, width, height) {
    super(GAME_START_COUNT_SCENE);

    this.parent = parent;
    this.zone = zone;
    this.worldWidth = width;
    this.worldHeigth = height;
    this.worldCenter = { x: width / 2, y: height / 2 };
    this.count = 4;
    this.alert = "Ready?";
  }

  create() {
    this.cameras.main.setBackgroundColor("rgba(0, 0, 0, 0.5)");

    this.text = this.add.text(50, 50, "<- CHARACTER", {
      fontSize: "50px",
      fontStyle: "bold",
      color: "silver",
      fontFamily: "fontNaruto",
    }).setOrigin(0);

    this.text = this.add.text(this.worldCenter.x, this.worldCenter.y, this.alert, {
      fontSize: "50px",
      fontStyle: "bold",
      color: "red",
      fontFamily: "fontNaruto",
    }).setOrigin(0.5);

    this.countingInterval = setInterval(() => {
      this.count--;

      if (this.count <= 0) return;

      this.text.destroy();

      this.text = this.add.text(this.worldCenter.x, this.worldCenter.y, this.count, {
        fontSize: "50px",
        fontStyle: "bold",
        color: "red",
        fontFamily: "fontNaruto",
      }).setOrigin(0.5);
    }, 1000);
  }

  update() {
    if (this.count === 0) {
      clearInterval(this.countingInterval);
      delete this.countingInterval;

      this.scene.remove();

      this.parent.startTime = this.time.now;
      this.parent.timedEvent = this.parent.createTimerEvent();
      this.parent.createCharacter();
    }
  }
}
