import Phaser from "phaser";
import BaseScene from "./BaseScene";

import MovingPlatform from "../objects/MovingPlatfrom";
import Shuriken from "../objects/Shuriken";
import {
  PAD,
  CHARACTER,
  SHURIKEN
} from "../constants/textureNames";
import { PLAY_SCENE } from "../constants/scenes";
import Character from "../objects/Character";

class PlayScene extends BaseScene {
  constructor(config) {
    super(PLAY_SCENE, config);
    this.minHeigh = this.config.height * 0.65;
    this.padInterval = 400;
  };

  create() {
    super.create();

    this.pads = [];
    this.shuriken = null;
    this.rope = null;
    this.attatchedTarget = null;

    for (let i = 0; i < 4; i++) {
      const height = Number(Math.random() * this.minHeigh);
      this.pad = new MovingPlatform(this, this.config.startPosition.x + (this.padInterval * i), height, PAD, { isStatic: true })
        .setScale(0.3);
      this.pad.moveHorizontally();
      this.pads.push(this.pad);
    }

    this.character = new Character(this, -50, 100, CHARACTER)
      .setOrigin(0.5);
    setTimeout(() => {
      this.character.setVelocity(10, 0);
    }, 500);

    this.add.text(50, 50, "000", {
      fontSize: "50px",
      color: "red",
      fontStyle: "bold",
    }).setOrigin(0);

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
      const yVelocity = Math.sin(angle);
      const xVelocity = Math.cos(angle);
      this.shuriken = new Shuriken(this, this.character.x + 70 * Math.cos(angle), this.character.y + 70 * Math.sin(angle), SHURIKEN).setScale(0.5);
      this.shuriken.setVelocity(xVelocity * 20, yVelocity * 20);
      this.shuriken.body.label = SHURIKEN;
    });

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
    // hanging rotation
    if (this.rope) {
      const angle = Phaser.Math.Angle.Between(this.character.x, this.character.y, this.attatchedTarget.position.x, this.attatchedTarget.position.y);
      this.character.setRotation(Math.cos(angle));
      if (!this.line) {
        this.line = this.add.graphics();
      }

      this.line.clear();

      this.matter.world.renderConstraint(this.rope, this.line, 0xffffff, 1, 2, 1, 0x00, 1);
    }

    // world를 벗어나면 수리검을 없앤다
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

    if (this.pads.length) {
      const padRightPosition = this.pads[0].getBounds().x + this.pads[0].getBounds().width;
      if (padRightPosition < 0) {
        this.pads.shift();
        const height = Number(Math.random() * this.minHeigh);
        this.pad = new MovingPlatform(this, 1600, height, PAD, { isStatic: true })
          .setScale(0.3);
        this.pad.moveHorizontally();
        this.pads.push(this.pad);
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
}

export default PlayScene;
