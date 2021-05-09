import Phaser from "phaser";

import PreloadScene from "./scenes/PreloadScene";
import PlayScene from "./scenes/PlayScene";

const WIDTH = 1152;
const HEIGHT = 647;
const START_POSITION = { x: WIDTH / 3, y: HEIGHT / 2 };
const GRAVITY = 0.5;
const DEAD_ZONE_RANGE = 100;
const DEAD_ZONE = {
  minX: 0 - DEAD_ZONE_RANGE,
  maxX: WIDTH + DEAD_ZONE_RANGE,
  minY: 0 - DEAD_ZONE_RANGE,
  maxY: HEIGHT + DEAD_ZONE_RANGE,
};

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: START_POSITION,
  deadZone: DEAD_ZONE,
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
      debug: true,
    },
  },
  scene: initScenes,
};

new Phaser.Game(config);
