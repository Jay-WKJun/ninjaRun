import Phaser from "phaser";

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.image("background", "assets/images/ForestBG.png");
    this.load.image("character", "assets/images/character_rope.png");
  }

  create() {
    this.scene.start("PlayScene");
  }
}

export default PreloadScene;
