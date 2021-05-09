import Phaser from "phaser";
import BaseScene from "./BaseScene";

import MovingPlatform from "../objects/MovingPlatfrom";
import Shuriken from "../objects/Shuriken";
import Character from "../objects/Character";
import Enemy from "../objects/Enemy";
import {
  PAD,
  CHARACTER,
  SHURIKEN,
  ENEMY_BIRD1,
  ENEMY_BIRD2
} from "../constants/textureNames";
import { PLAY_SCENE } from "../constants/scenes";

class PlayScene extends BaseScene {
  constructor(config) {
    super(PLAY_SCENE, config);
    this.minHeigh = this.config.height * 0.65;
    this.padInterval = 400;

    this.pads = [];
    this.enemyType = [];
    this.enemies = [];
    this.shuriken = null;
    this.rope = null;
    this.attatchedTarget = null;
  };

  create() {
    super.create();
    this.createAnimation();
    this.createScore();
    this.createCharacter();

    for (let i = 0; i < 5; i++) {
      const birdType = this.getBirdTypeInRandom();

      this.createEnemyBird(birdType, 1000 + (this.padInterval * i));
    }

    for (let i = 0; i < 4; i++) {
      const xPosition = this.config.startPosition.x + (this.padInterval * i);
      this.createPlatform(xPosition);
    }

    this.handleMouseClickEvent();
    this.handleKeyDownEvent();

    this.matter.world.on("collisionstart", (e, b1, b2) => {
      if ((b1.label === SHURIKEN || b2.label === SHURIKEN) && !this.rope) {
        this.attatchedTarget = b1.label === SHURIKEN ? b2 : b1;
        const distance = Phaser.Math.Distance.Between(this.character.x, this.character.y, this.attatchedTarget.x, this.attatchedTarget.y);
        this.rope = this.matter.add.constraint(this.character, this.attatchedTarget, distance, 0);
        this.shuriken.destroy();
      }
    });
  };

  update() {
    if (this.rope) {
      this.rotateCharacterToRopeDirection();
      this.drawRope();
    }

    this.destroyShurikenWhenWorldOut();

    if (this.pads.length) {
      const padRightPosition = this.pads[0].getBounds().x + this.pads[0].getBounds().width;
      if (padRightPosition < 0) {
        this.pads.shift();
        this.createPlatform(1600);
      }
    }

    if (this.enemies.length) {
      const enemyRightPosition = this.enemies[0].getBounds().x + this.enemies[0].getBounds().width;
      if (enemyRightPosition < 0) {
        this.enemies.shift();
        const birdType = this.getBirdTypeInRandom();
        this.createEnemyBird(birdType, 1600);
      }
    }

    if (this.character) {
      if (
        (this.character.x > this.config.deadZone.maxX) ||
        (this.character.x < this.config.deadZone.minX) ||
        (this.character.y > this.config.deadZone.maxY) ||
        (this.character.y < this.config.deadZone.minY)
      ) {
        console.log("Dead!!");
      }
    }
  };

  createAnimation() {
    const animationKey1 = "fly1";
    this.anims.create({
      key: animationKey1,
      frames: this.anims.generateFrameNumbers(ENEMY_BIRD1, { start: 0, end: 8 }),
      frameRate: 8,
      repeat: -1,
    });
    this.enemyType.push({ animation: animationKey1, birdType: ENEMY_BIRD1 });

    const animationKey2 = "fly2";
    this.anims.create({
      key: animationKey2,
      frames: this.anims.generateFrameNumbers(ENEMY_BIRD2, { start: 0, end: 12 }),
      frameRate: 8,
      repeat: -1,
    });
    this.enemyType.push({ animation: animationKey2, birdType: ENEMY_BIRD2 });
  }

  createScore() {
    this.add.text(50, 50, "000", {
      fontSize: "50px",
      color: "red",
      fontStyle: "bold",
    }).setOrigin(0);
  }

  createCharacter() {
    this.character = new Character(this, -50, 100, CHARACTER)
      .setOrigin(0.5);
    setTimeout(() => {
      this.character.setVelocity(10, 0);
    }, 500);
  }

  createEnemyBird(birdType, xPosition) {
    const yPosition = Number(Math.random() * this.config.height);
    this.enemyBird = new Enemy(this, xPosition, yPosition, birdType.birdType, { isStatic: true })
      .setScale(0.2);
    this.enemyBird.play(birdType.animation);
    this.enemyBird.setBody({ width: 80, height: 30 });
    this.enemyBird.setIgnoreGravity(true);
    this.enemyBird.moveHorizontally(0);
    this.enemies.push(this.enemyBird);
  }

  createPlatform(xPosition) {
    const height = Number(Math.random() * this.minHeigh);
    this.pad = new MovingPlatform(this, xPosition, height, PAD, { isStatic: true })
      .setScale(0.3);
    this.pad.moveHorizontally();
    this.pads.push(this.pad);
  }

  handleMouseClickEvent() {
    this.input.on("pointerdown", (e) => {
      if (this.rope) {
        this.shuriken.destroy();
        this.shuriken = null;
        this.matter.world.removeConstraint(this.rope);
        this.rope = null;
        this.attatchedTarget = null;
        this.character.setRotation(0);
        this.line.clear();
        this.line = null;
        return;
      }

      if (this.shuriken) return;

      const angle = Phaser.Math.Angle.Between(this.character.x, this.character.y, e.position.x, e.position.y);
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      this.shuriken = new Shuriken(
        this,
        this.character.x + 70 * cos,
        this.character.y + 70 * sin,
        SHURIKEN
      ).setScale(0.5);
      this.shuriken.setVelocity(cos * 20, sin * 20);
      this.shuriken.body.label = SHURIKEN;
    });
  }

  handleKeyDownEvent() {
    this.input.keyboard.on("keydown", (e) => {
      if (!this.rope) return;

      if (e.key === "ArrowRight") {
        this.character.setVelocityX(this.character.body.velocity.x + 0.5);
        return;
      }

      if (e.key === "ArrowLeft") {
        this.character.setVelocityX(this.character.body.velocity.x - 0.5);
      }
    });
  }

  rotateCharacterToRopeDirection() {
    const angle = Phaser.Math.Angle.Between(
      this.character.x,
      this.character.y,
      this.attatchedTarget.position.x,
      this.attatchedTarget.position.y
    );

    this.character.setRotation(Math.cos(angle));
  }

  drawRope() {
    if (!this.line) {
      this.line = this.add.graphics();
    }

    this.line.clear();

    this.matter.world.renderConstraint(this.rope, this.line, 0xffffff, 1, 2, 1, 0x00, 1);
  }

  destroyShurikenWhenWorldOut() {
    if ((this.shuriken && !this.rope)) {
      if (
        (this.shuriken.x > this.config.width) ||
        (this.shuriken.x < 0) ||
        (this.shuriken.y > this.config.height) ||
        (this.shuriken.y < 0)
      ) {
        this.shuriken.destroy();
        this.shuriken = null;
      }
    }
  }

  getBirdTypeInRandom() {
    return this.enemyType[Math.floor(Math.random() * (this.enemyType.length))];
  }
}

export default PlayScene;
