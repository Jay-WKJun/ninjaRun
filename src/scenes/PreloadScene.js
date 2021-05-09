import Phaser from "phaser";

import {
  BACKGOURND,
  CHARACTER,
  SHURIKEN,
  SHURIKEN_SPIN,
  PAD
} from "../constants/textureNames";
import { PLAY_SCENE } from "../constants/scenes";

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  };

  preload() {
    this.load.image(BACKGOURND, "assets/images/ForestBG.png");
    this.load.image(CHARACTER, "assets/images/ninja_hanging_fit.png");
    this.load.image(SHURIKEN, "assets/images/shuriken.png");
    this.load.image(SHURIKEN_SPIN, "assets/images/shuriken_spin.png");
    this.load.image(PAD, "assets/images/pad_small.png");
  };

  create() {
    this.matter.world.update60Hz();
    this.scene.start(PLAY_SCENE);
  };
}

export default PreloadScene;
