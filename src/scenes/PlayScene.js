import Phaser from "phaser";
import BaseScene from "./BaseScene";

import MovingPlatform from "../objects/MovingPlatfrom";
import Shuriken from "../objects/Shuriken";
import {
  PAD,
  CHARACTER,
  CELLING,
  SHURIKEN
} from "../constants/textureNames";
import { PLAY_SCENE } from "../constants/scenes";

class PlayScene extends BaseScene {
  constructor(config) {
    super(PLAY_SCENE, config);
    this.pad = null;
  }

  create() {
    super.create();

    this.shuriken = null;
    this.rope = null;
    this.attatchedTarget = null;

    this.pad = new MovingPlatform(this, 1600, 200, PAD, { isStatic: true })
      .setScale(0.3);
    this.pad.moveHorizontally();

    this.character = this.matter.add.image(200, 300, CHARACTER)
      .setScale(0.4)
      .setOrigin(0.5);

    this.celling = this.matter.add.sprite(400, 10, CELLING, null, { isStatic: true });
    this.celling.body.label = "wall";

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
        return;
      }

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
    if (this.rope) {
      const angle = Phaser.Math.Angle.Between(this.character.x, this.character.y, this.attatchedTarget.position.x, this.attatchedTarget.position.y);
      this.character.setRotation(Math.cos(angle));
    }
  };
}

export default PlayScene;
