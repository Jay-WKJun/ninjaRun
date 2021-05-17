import Phaser from "phaser";
import BaseScene from "../BaseScene";

import GameOverScene from "../modal/GameOverScene";
import GameStartCountScene from "../modal/GameStartCountScene";
import MovingPlatform from "../../objects/MovingPlatform";
import Shuriken from "../../objects/Shuriken";
import Character from "../../objects/Character";
import Enemy from "../../objects/Enemy";
import {
  PLATFORM,
  CHARACTER,
  CHARACTER_DIE_ANIMATION,
  SHURIKEN,
  ENEMY_BIRD1,
  ENEMY_BIRD2,
  ENEMY,
  ENEMY_BIRD1_DIE,
  ENEMY_BIRD2_DIE
} from "../../constants/textureNames";
import { PLAY_SCENE, GAMEOVER_SCENE, GAME_START_COUNT_SCENE } from "../../constants/scenes";

export default class initPlayScene extends BaseScene {
  constructor(config) {
    super(PLAY_SCENE, config);
    this.deadZone = config.deadZone;

    this.scorePosition = config.scorePosition;

    this.startPosition = config.startPosition;
    this.accelerationValue = config.accelerationValue;

    this.plaformStartPosition = config.platformStartPosition;
    this.plaformInterval = config.platformInterval;
    this.platformHeightLimit = config.height * 0.65;

    this.enemyStartPosition = config.enemyStartPosition;
    this.enemySize = config.enemySize;
    this.enemyNumberLimit = config.enemyNumberLimit;
    this.enemyInterval = config.enemyInterval;

    this.shurikenPositionOffset = config.shurikenPositionOffset;
    this.shurikenVelocityConstant = config.shurikenVelocityConstant;

    this.isStart = false;
    this.isGameOver = false;
    this.scoreBoard = null;
    this.score = 0;
    this.startTime = 0;

    this.character = null;
    this.platforms = [];
    this.enemyType = [];
    this.enemies = {};
    this.shuriken = null;
    this.rope = null;
    this.attatchedTarget = null;
  };

  create() {
    this.modalZone = this.add.zone(0, 0, this.worldWidth, this.worldHeight).setOrigin(0.5);

    const gameStartCountScene = new GameStartCountScene(this, this.modalZone, this.worldWidth, this.worldHeight);

    this.scene.add(GAME_START_COUNT_SCENE, gameStartCountScene, true);

    this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.createTimeBoard, callbackScope: this, loop: true });

    this.collision1 = this.matter.world.nextCategory();
    this.collision2 = this.matter.world.nextCategory();

    super.create();
    this.createAnimation();
    this.createScore();
    this.createTimeBoard();

    for (let i = 0; i < this.enemyNumberLimit; i++) {
      const XPosition = this.enemyStartPosition + (this.enemyInterval * i);

      this.createEnemy(XPosition);
    }

    for (let i = 0; i < 4; i++) {
      const xPosition = this.plaformStartPosition + (this.plaformInterval * i);

      this.createPlatform(xPosition);
    }

    this.handleMouseClickEvent();
    this.handleKeyDownEvent();
    this.handleCollisionEvent();
  };

  createAnimation() {
    const animationKey1 = "fly1";
    this.anims.create({
      key: animationKey1,
      frames: this.anims.generateFrameNumbers(ENEMY_BIRD1, { start: 0, end: 7 }),
      frameRate: 8,
      repeat: -1,
    });

    const dieAnimationKey1 = "die1";
    this.anims.create({
      key: dieAnimationKey1,
      frames: this.anims.generateFrameNumbers(ENEMY_BIRD1_DIE, { start: 0, end: 7 }),
      frameRate: 8,
      repeat: 0,
    });

    this.enemyType.push({ animation: animationKey1, enemyType: ENEMY_BIRD1, dieAnimation: dieAnimationKey1 });

    const animationKey2 = "fly2";
    this.anims.create({
      key: animationKey2,
      frames: this.anims.generateFrameNumbers(ENEMY_BIRD2, { start: 0, end: 11 }),
      frameRate: 8,
      repeat: -1,
    });

    const dieAnimationKey2 = "die2";
    this.anims.create({
      key: dieAnimationKey2,
      frames: this.anims.generateFrameNumbers(ENEMY_BIRD2_DIE, { start: 0, end: 7 }),
      frameRate: 8,
      repeat: 0,
    });

    this.enemyType.push({ animation: animationKey2, enemyType: ENEMY_BIRD2, dieAnimation: dieAnimationKey2 });

    const characterDieAnimationKey = "ninja6_Die1";
    this.anims.create({
      key: characterDieAnimationKey,
      frames: this.anims.generateFrameNames(CHARACTER_DIE_ANIMATION, {
        start: 1,
        end: 5,
        prefix: "ninja6_dead",
        zeroPad: 2,
        suffix: ".png",
      }),
      frameRate: 8,
      repeat: false,
    });

    this.characterDieAnimation = characterDieAnimationKey;

    const characterThrowAnimationKey = "ninja6_Throw1";
    this.anims.create({
      key: characterThrowAnimationKey,
      frames: this.anims.generateFrameNames("chracterThrowJump", {
        start: 0,
        end: 7,
        prefix: "ninja6_throwJump",
        zeroPad: 2,
        suffix: ".png",
      }),
      frameRate: 20,
      repeat: false,
    });

    this.charaterThrowAnimation = characterThrowAnimationKey;
  }

  createScore() {
    const scoreX = this.scorePosition.x;
    const scoreY = this.scorePosition.y;

    this.registry.set("score", this.score);

    if (this.scoreBoard) this.scoreBoard.destroy();

    this.scoreBoard = this.add.text(scoreX, scoreY, this.score, {
      fontSize: "50px",
      color: "red",
      fontStyle: "bold",
    }).setOrigin(0);
  }

  createTimeBoard() {
    const timeX = this.scorePosition.x;
    const timeY = this.scorePosition.y + 100;
    const currentTimeMillsecond = this.time.now - this.startTime;
    const currentSecond = Math.floor(currentTimeMillsecond / 1000);
    const currentTime = { minute: Math.floor(currentSecond / 60), seconds: currentSecond % 60 };

    this.registry.set("playTime", currentTime);

    if (this.timeBoard) this.timeBoard.destroy();

    this.timeBoard = this.add.text(timeX, timeY, `${currentTime.minute}:${currentTime.seconds}`, {
      fontSize: "50px",
      color: "red",
      fontStyle: "bold",
    }).setOrigin(0);
  }

  createCharacter() {
    const startX = this.startPosition.x;
    const startY = this.startPosition.y;

    this.character = new Character(this, startX, startY, CHARACTER);
    this.character.setCollisionCategory(this.collision1);
    this.character.setCollidesWith(this.collision1);
    this.character.body.label = CHARACTER;
    this.character.dieAnimation = this.characterDieAnimation;
    this.character.throwAnimation = this.charaterThrowAnimation;
    delete this.characterDieAnimation;
    delete this.charaterThrowAnimation;

    this.character.setVelocity(10, 0);
  }

  createEnemy(xPosition) {
    const enemyType = this.getEnemyTypeInRandom();
    const yPosition = Number(Math.random() * this.worldHeight);

    const newEnemy = new Enemy(
      this,
      xPosition,
      yPosition,
      enemyType.enemyType
    ).setScale(0.2);

    newEnemy
      .play(enemyType.animation)
      .setBody(this.enemySize)
      .setIgnoreGravity(true)
      .moveHorizontally(0);

    newEnemy.setCollisionCategory(this.collision1);
    newEnemy.setCollidesWith(this.collision1);
    newEnemy.body.label = ENEMY;
    newEnemy.body.dieAnimation = enemyType.dieAnimation;

    this.enemies[newEnemy.body.id] = newEnemy;
  }

  createPlatform(xPosition) {
    const height = Number(Math.random() * this.platformHeightLimit);

    const newPlatform = new MovingPlatform(
      this,
      xPosition,
      height,
      { isStatic: true }
    );

    newPlatform.moveHorizontally();
    newPlatform.setCollisionCategory(this.collision2);
    newPlatform.setCollidesWith(this.collision1);
    newPlatform.body.label = PLATFORM;

    this.platforms.push(newPlatform);
  }

  handleMouseClickEvent() {
    const shootShuriken = (e) => {
      const angle = Phaser.Math.Angle.Between(
        this.character.x,
        this.character.y,
        e.position.x,
        e.position.y
      );
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const positionOffset = this.shurikenPositionOffset;
      const velocityConstant = this.shurikenVelocityConstant;

      this.shuriken = new Shuriken(
        this,
        this.character.x + positionOffset * cos,
        this.character.y + positionOffset * sin
      )
        .setScale(0.5)
        .setVelocity(cos * velocityConstant, sin * velocityConstant);

      this.character.play(this.character.throwAnimation);
      this.shuriken.body.label = SHURIKEN;
      this.shuriken.spinShuriken();
      this.shuriken.setCollisionCategory(this.collision1);
      this.shuriken.setCollidesWith([this.collision1, this.collision2]);
    };

    this.input.on("pointerdown", (e) => {
      if (this.isGameOver) return;

      if (this.rope) {
        this.removeConstraintAndRope();
        this.character.spinCharacterOneTime();
        return;
      }

      if (this.shuriken) return;

      shootShuriken(e);
    });
  }

  handleKeyDownEvent() {
    this.input.keyboard.on("keydown", (e) => {
      if (!this.rope) return;

      const accelerationValue = this.accelerationValue;

      if (e.key === "ArrowRight") {
        this.character.setVelocityX(this.character.body.velocity.x + accelerationValue);
        return;
      }

      if (e.key === "ArrowLeft") {
        this.character.setVelocityX(this.character.body.velocity.x - accelerationValue);
      }
    });
  }

  handleCollisionEvent() {
    const addConstraint = (character, otherObject) => {
      const distance = Phaser.Math.Distance.Between(
        character.x,
        character.y,
        otherObject.x,
        otherObject.y
      );

      this.rope = this.matter.add.constraint(
        character,
        otherObject,
        distance,
        0
      );
    };

    this.matter.world.on("collisionstart", (e, b1, b2) => {
      if (b1.label === CHARACTER || b2.label === CHARACTER) {
        const characterOpponent = b1.label === CHARACTER ? b2 : b1;
        if (characterOpponent.label === ENEMY) {
          const enemy = this.enemies[characterOpponent.id];

          this.killEnemy(enemy, characterOpponent.id);
          this.gameOver();
        }

        return;
      }

      if ((b1.label === SHURIKEN || b2.label === SHURIKEN) && !this.rope) {
        const shurikenOpponent = b1.label === SHURIKEN ? b2 : b1;

        this.deleteShuriken();

        if (b1.label === ENEMY || b2.label === ENEMY) {
          const enemy = this.enemies[shurikenOpponent.id];

          this.score += 1;
          this.registry.set("score", this.score);
          this.createScore();
          this.killEnemy(enemy, shurikenOpponent.id);
        } else {
          this.attatchedTarget = shurikenOpponent;
          addConstraint(this.character, this.attatchedTarget);
        }
      }
    });
  }

  killEnemy(enemy, enemyId) {
    enemy.play(enemy.body.dieAnimation);
    enemy.body.destroy();
    enemy.setStatic(true);

    setTimeout(() => this.deleteEnemy(enemy, enemyId), 1000);
  }

  deleteEnemy(enemy, enemyId) {
    enemy.removeCounter();
    enemy.destroy();
    delete this.enemies[enemyId];
  }

  deleteShuriken() {
    this.shuriken.removeCounter();
    this.shuriken.destroy();
    this.shuriken = null;
  }

  getEnemyTypeInRandom() {
    return this.enemyType[Math.floor(Math.random() * (this.enemyType.length))];
  }

  removeConstraintAndRope() {
    this.matter.world.removeConstraint(this.rope);

    this.rope = null;

    this.line.clear();
    this.line = null;

    this.attatchedTarget = null;
  };

  addGameOverModal() {
    const gameOverScene = new GameOverScene(this, this.modalZone, this.worldWidth, this.worldHeight);

    this.scene.add(GAMEOVER_SCENE, gameOverScene, true);
  }

  gameOver() {
    this.isGameOver = true;
    this.rope && this.removeConstraintAndRope();
    this.character.removeCounter();
    this.character.play(this.character.dieAnimation);
    setTimeout(() => {
      this.addGameOverModal();
    }, 1000);
    setTimeout(() => {
      this.character && this.character.destroy();
    }, 2000);
  }
}
