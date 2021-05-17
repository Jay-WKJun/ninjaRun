import Phaser from "phaser";

export default class GameStartCountScene extends Phaser.Scene {
  constructor(parent, zone, width, height) {
    super("GameStartCountScene");

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

    this.text = this.add.text(this.worldCenter.x, this.worldCenter.y, this.alert, {
      fontSize: "50px",
      fontStyle: "bold",
      color: "red",
    }).setOrigin(0.5);

    this.countingInterval = setInterval(() => {
      this.text.destroy();
      this.count--;

      this.text = this.add.text(this.worldCenter.x, this.worldCenter.y, this.count, {
        fontSize: "50px",
        fontStyle: "bold",
        color: "red",
      }).setOrigin(0.5);
    }, 1000);
  }

  update() {
    if (this.count === 0) {
      clearInterval(this.countingInterval);
      delete this.countingInterval;
      this.scene.remove();
      this.parent.createCharacter();
    }
  }
}
