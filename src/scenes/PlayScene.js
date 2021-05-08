import Phaser from "phaser";
import BaseScene from "./BaseScene";

class PlayScene extends BaseScene {
  constructor(config) {
    super("PlayScene", config);
  }

  create() {
    super.create();

    this.character = this.matter.add.image(200, 300, "character")
      .setScale(0.4)
      .setOrigin(0.5);

    this.celling = this.matter.add.sprite(400, 10, "celling", null, { isStatic: true });

    this.add.text(50, 50, "000", {
      fontSize: "50px",
      color: "red",
      fontStyle: "bold",
    }).setOrigin(0);

    this.input.on("pointerdown", (e) => {
      const angle = Phaser.Math.Angle.Between(this.character.x, this.character.y, e.position.x, e.position.y);
      const yVelocity = Math.sin(angle);
      const xVelocity = Math.cos(angle);
      this.shuriken = this.matter.add.image(this.character.x + 70 * Math.cos(angle), this.character.y + 70 * Math.sin(angle), "shuriken").setScale(0.5);
      this.shuriken.setVelocity(xVelocity * 20, yVelocity * 20);
    });

    this.matter.world.on("collisionStart", (e, b1, b2) => {
      console.log(e, b1, b2);
    });
  }
}

export default PlayScene;
