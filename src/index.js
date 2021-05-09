import Phaser from "phaser";

import PreloadScene from "./scenes/PreloadScene";
import PlayScene from "./scenes/PlayScene";

const WIDTH = 1152;
const HEIGHT = 647;
const START_POSITION = { x: WIDTH / 10, y: HEIGHT / 2 };
const GRAVITY = 0.2;

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: START_POSITION,
};

const Scenes = [PreloadScene, PlayScene];
const createScene = (Scene) => new Scene(SHARED_CONFIG);
const initScenes = Scenes.map(createScene);

const config = {
  type: Phaser.AUTO,
  width: WIDTH,
  height: HEIGHT,
  pixelArt: true,
  physics: {
    default: "matter",
    matter: {
      gravity: {
        y: GRAVITY,
      },
    },
  },
  scene: initScenes,
};

new Phaser.Game(config);
