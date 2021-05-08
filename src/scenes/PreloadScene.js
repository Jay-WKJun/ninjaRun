import Phaser from "phaser";

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.image("background", "assets/images/ForestBG.png");
    this.load.image("character", "assets/images/ninja_hanging_fit.png");
    this.load.image("celling", "assets/images/celling.png");
    this.load.image("rope", "assets/images/rope.png");
    this.load.image("shuriken", "assets/images/shuriken.png");
    this.load.image("shurikenSpin", "assets/images/shuriken_spin.png");
    this.load.image("log", "assets/images/log.png");
    this.load.image("pad", "assets/images/pad.png");
  }

  create() {
    this.matter.world.update60Hz();
    this.scene.start("PlayScene");
  }
}

export default PreloadScene;
