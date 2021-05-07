import Phaser from "phaser";

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.image("background", "assets/images/ForestBG.png");
  }

  create() {
    this.scene.start("PlayScene");
  }
}

export default PreloadScene;
