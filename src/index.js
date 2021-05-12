import Phaser from "phaser";

import PreloadScene from "./scenes/PreloadScene";
import PlayScene from "./scenes/PlayScene/PlayScene";

const WIDTH = 1152;
const HEIGHT = 647;
const START_POSITION = { x: -50, y: 100 };
const ACCELERATION_VALUE = 0.5;
const GRAVITY = 0.5;
const DEAD_ZONE_RANGE = 200;
const DEAD_ZONE = {
  minX: 0 - DEAD_ZONE_RANGE,
  maxX: WIDTH + DEAD_ZONE_RANGE,
  minY: 0 - DEAD_ZONE_RANGE,
  maxY: HEIGHT + DEAD_ZONE_RANGE,
};

const PLATFORM_START_POSITION = WIDTH / 2;
const PLATFORM_INTERVAL = 400;

const ENEMY_SIZE = { width: 80, height: 30 };
const ENEMY_INTERVAL = 400;

const SHURIKEN_POSITION_OFFSET = 70;
const SHURIKEN_VELOCITY_CONSTANT = 15;

const SCORE_POSITION = { x: 50, y: 50 };

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  deadZone: DEAD_ZONE,
  scorePosition: SCORE_POSITION,
  startPosition: START_POSITION,
  accelerationValue: ACCELERATION_VALUE,
  platformStartPosition: PLATFORM_START_POSITION,
  platformInterval: PLATFORM_INTERVAL,
  enemySize: ENEMY_SIZE,
  enemyInterval: ENEMY_INTERVAL,
  shurikenPositionOffset: SHURIKEN_POSITION_OFFSET,
  shurikenVelocityConstant: SHURIKEN_VELOCITY_CONSTANT,
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
