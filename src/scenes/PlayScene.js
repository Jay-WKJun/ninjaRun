import Phaser from "phaser";
import BaseScene from "./BaseScene";

class PlayScene extends BaseScene {
  constructor(config) {
    super("PlayScene", config);
  }

  create() {
    super.create();

    this.character = this.physics.add.image(200, 300, "character")
      .setScale(0.4)
      .setOrigin(0.5);

    this.add.image(100, 200, "rope")
      .setScale(0.5)
      .setOrigin(0);

    this.celling = this.physics.add.image(0, 0, "celling")
      .setImmovable(true)
      .setOrigin(0, 0.1);
    this.celling.body.setSize(this.celling.body.width, 50, false);

    this.add.text(50, 50, "000", {
      fontSize: "50px",
      color: "red",
      fontStyle: "bold",
    }).setOrigin(0);

    this.input.on("pointerdown", (e) => {
      const angle = Phaser.Math.Angle.Between(this.character.x, this.character.y, e.position.x, e.position.y);
      console.log(e.position.x, e.position.y);
      const yVelocity = Math.sin(angle);
      const xVelocity = Math.cos(angle);
      console.log(xVelocity, yVelocity);
      this.shuriken = this.physics.add.image(this.character.x, this.character.y, "shuriken")
        .setScale(0.5)
        .setGravity(0, 300)
        .setVelocity(xVelocity * 900, yVelocity * 900);
      this.physics.add.collider(this.shuriken, this.celling, () => {
        this.shuriken.setGravity(0);
        this.shuriken.setVelocity(0);
      }, null, this);
    });
  }
}

export default PlayScene;
