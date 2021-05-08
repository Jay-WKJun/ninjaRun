import Phaser from "phaser";
import BaseScene from "./BaseScene";

class PlayScene extends BaseScene {
  constructor(config) {
    super("PlayScene", config);
  }

  create() {
    super.create();

    this.shuriken = null;
    this.rope = null;

    this.character = this.matter.add.image(200, 300, "character")
      .setScale(0.4)
      .setOrigin(0.5);

    this.celling = this.matter.add.sprite(400, 10, "celling", null, { isStatic: true });
    this.celling.body.label = "wall";

    this.add.text(50, 50, "000", {
      fontSize: "50px",
      color: "red",
      fontStyle: "bold",
    }).setOrigin(0);

    this.input.on("pointerdown", (e) => {
      console.log(this.rope);
      if (this.rope) {
        this.shuriken.destroy();
        this.shuriken = null;
        this.matter.world.removeConstraint(this.rope);
        this.rope = null;
        return;
      }

      const angle = Phaser.Math.Angle.Between(this.character.x, this.character.y, e.position.x, e.position.y);
      const yVelocity = Math.sin(angle);
      const xVelocity = Math.cos(angle);
      this.shuriken = this.matter.add.image(this.character.x + 70 * Math.cos(angle), this.character.y + 70 * Math.sin(angle), "shuriken").setScale(0.5);
      this.shuriken.setVelocity(xVelocity * 20, yVelocity * 20);
      this.shuriken.body.label = "shuriken";
    });

    this.input.keyboard.on("keydown", (e) => {
      if (!this.rope) return;

      if (e.key === "ArrowRight") {
        console.log(this.character.body.velocity.x);
        this.character.setVelocityX(this.character.body.velocity.x + 0.1);
        return;
      }

      if (e.key === "ArrowLeft") {
        console.log(this.character.body.velocity.x);
        this.character.setVelocityX(this.character.body.velocity.x - 0.1);
        return;
      }
    });

    this.matter.world.on("collisionstart", (e, b1, b2) => {
      if ((b1.label === "shuriken" || b2.label === "shuriken") && !this.rope) {
        this.shuriken.setStatic(true);
        const distance = Phaser.Math.Distance.Between(this.character.x, this.character.y, this.shuriken.x, this.shuriken.y);
        this.rope = this.matter.add.constraint(this.character, this.shuriken, distance, 0);
      }
    });
  }
}

export default PlayScene;
