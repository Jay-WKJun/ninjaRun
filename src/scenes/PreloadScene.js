import Phaser from "phaser";

import {
  BACKGOURND,
  CHARACTER,
  SHURIKEN,
  SHURIKEN_SPIN,
  PAD,
  ENEMY_BIRD1,
  ENEMY_BIRD2
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
    this.load.spritesheet(ENEMY_BIRD1, "assets/images/red_bird.png", { frameWidth: 663, frameHeight: 637 });
    this.load.spritesheet(ENEMY_BIRD2, "assets/images/yellow_bird.png", { frameWidth: 625, frameHeight: 621 });
  };

  create() {
    this.matter.world.update60Hz();
    this.scene.start(PLAY_SCENE);
  };
}

export default PreloadScene;
