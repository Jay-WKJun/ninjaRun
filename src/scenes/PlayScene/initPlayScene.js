import Phaser from "phaser";
import BaseScene from "../BaseScene";

import MovingPlatform from "../../objects/MovingPlatform";
import Shuriken from "../../objects/Shuriken";
import Character from "../../objects/Character";
import Enemy from "../../objects/Enemy";
import {
  PLATFORM,
  CHARACTER,
  SHURIKEN,
  ENEMY_BIRD1,
  ENEMY_BIRD2,
  ENEMY,
  ENEMY_BIRD1_DIE,
  ENEMY_BIRD2_DIE
} from "../../constants/textureNames";
import { PLAY_SCENE } from "../../constants/scenes";

export default class initPlayScene extends BaseScene {
  constructor(config) {
    super(PLAY_SCENE, config);
    this.worldWidth = this.config.width;
    this.worldHeight = this.config.height;

    this.scorePosition = this.config.scorePosition;

    this.startPosition = this.config.startPosition;
    this.accelerationValue = this.config.accelerationValue;

    this.plaformStartPosition = this.config.platformStartPosition;
    this.plaformInterval = this.config.platformInterval;
    this.platformHeightLimit = this.config.height * 0.65;

    this.enemySize = this.config.enemySize;
    this.enemyInterval = this.config.enemyInterval;

    this.shurikenPositionOffset = this.config.shurikenPositionOffset;
    this.shurikenVelocityConstant = this.config.shurikenVelocityConstant;

    this.platforms = [];
    this.enemyType = [];
    this.enemies = {};
    this.shuriken = null;
    this.rope = null;
    this.attatchedTarget = null;
  };

  create() {
    this.collision1 = this.matter.world.nextCategory();
    this.collision2 = this.matter.world.nextCategory();

    super.create();
    this.createAnimation();
    this.createScore();
    this.createCharacter();

    for (let i = 0; i < 5; i++) {
      const enemyType = this.getEnemyTypeInRandom();
      const XPosition = this.worldWidth + (this.enemyInterval * i);

      this.createEnemy(enemyType, XPosition);
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
      frames: this.anims.generateFrameNumbers(ENEMY_BIRD1, { start: 0, end: 8 }),
      frameRate: 8,
      repeat: -1,
    });

    const dieAnimationKey1 = "die1";
    this.anims.create({
      key: dieAnimationKey1,
      frames: this.anims.generateFrameNumbers(ENEMY_BIRD1_DIE, { start: 0, end: 8 }),
      frameRate: 8,
      repeat: 0,
    });

    this.enemyType.push({ animation: animationKey1, enemyType: ENEMY_BIRD1, dieAnimation: dieAnimationKey1 });

    const animationKey2 = "fly2";
    this.anims.create({
      key: animationKey2,
      frames: this.anims.generateFrameNumbers(ENEMY_BIRD2, { start: 0, end: 12 }),
      frameRate: 8,
      repeat: -1,
    });

    const dieAnimationKey2 = "die2";
    this.anims.create({
      key: dieAnimationKey2,
      frames: this.anims.generateFrameNumbers(ENEMY_BIRD2_DIE, { start: 0, end: 8 }),
      frameRate: 8,
      repeat: 0,
    });

    this.enemyType.push({ animation: animationKey2, enemyType: ENEMY_BIRD2, dieAnimation: dieAnimationKey2 });
  }

  createScore() {
    const scoreX = this.scorePosition.x;
    const scoreY = this.scorePosition.y;

    this.add.text(scoreX, scoreY, "000", {
      fontSize: "50px",
      color: "red",
      fontStyle: "bold",
    }).setOrigin(0);
  }

  createCharacter() {
    const startX = this.startPosition.x;
    const startY = this.startPosition.y;

    this.character = new Character(this, startX, startY, CHARACTER)
      .setOrigin(0.5);

    this.character.setCollisionCategory(this.collision1);
    this.character.setCollidesWith(this.collision1);
    this.character.body.label = CHARACTER;

    setTimeout(() => {
      this.character.setVelocity(10, 0);
    }, 500);
  }

  createEnemy(enemyType, xPosition) {
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
      PLATFORM,
      { isStatic: true }
    ).setScale(0.3);

    newPlatform.moveHorizontally();
    newPlatform.setCollisionCategory(this.collision2);
    newPlatform.setCollidesWith(this.collision1);
    newPlatform.body.label = PLATFORM;

    this.platforms.push(newPlatform);
  }

  handleMouseClickEvent() {
    const removeConstraintAndRope = () => {
      this.matter.world.removeConstraint(this.rope);

      this.rope = null;

      this.line.clear();
      this.line = null;

      this.attatchedTarget = null;
    };

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
        this.character.y + positionOffset * sin,
        SHURIKEN
      )
        .setScale(0.5)
        .setVelocity(cos * velocityConstant, sin * velocityConstant);

      this.shuriken.body.label = SHURIKEN;
      this.shuriken.setCollisionCategory(this.collision1);
      this.shuriken.setCollidesWith([this.collision1, this.collision2]);
    };

    this.input.on("pointerdown", (e) => {
      if (this.rope) {
        removeConstraintAndRope();
        this.character.setRotation(0);
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
      if ((b1.label === SHURIKEN || b2.label === SHURIKEN) && !this.rope) {
        const shurikenOpponent = b1.label === SHURIKEN ? b2 : b1;
        this.deleteShuriken();

        if (b1.label === ENEMY || b2.label === ENEMY) {
          console.log(Object.keys(this.enemies).length);
          const enemy = this.enemies[shurikenOpponent.id];

          enemy.play(enemy.body.dieAnimation);
          enemy.body.destroy();
          enemy.setStatic(true);

          setTimeout(() => {
            enemy.removeCounter();
            enemy.destroy();
            delete this.enemies[shurikenOpponent.id];
          }, 1000);
        } else {
          this.attatchedTarget = shurikenOpponent;
          addConstraint(this.character, this.attatchedTarget);
        }
      }
    });
  }

  deleteShuriken() {
    this.shuriken.destroy();
    this.shuriken = null;
  }

  getEnemyTypeInRandom() {
    return this.enemyType[Math.floor(Math.random() * (this.enemyType.length))];
  }
}
