import Phaser from "phaser";

import Character from "../../objects/Character";
import { GAMEOVER_SCENE } from "../../constants/scenes";
import { CHARACTER_DEAD, STUN } from "../../constants/textureNames";

export default class GameOverScene extends Phaser.Scene {
  constructor(parent, zone, width, height) {
    super(GAMEOVER_SCENE);

    this.parent = parent;
    this.zone = zone;
    this.worldWidth = width;
    this.worldHeigth = height;
    this.worldCenter = { x: width / 2, y: height / 2 };
  }

  create() {
    this.cameras.main.setBackgroundColor("rgba(0, 0, 0, 0.5)");

    const deadCharacter = new Character(this, this.worldCenter.x, this.worldCenter.y, CHARACTER_DEAD, { isStatic: true });

    const animationKey1 = "stunAnimation";
    this.anims.create({
      key: animationKey1,
      frames: this.anims.generateFrameNames(STUN, {
        start: 1,
        end: 4,
        prefix: "stun",
        zeroPad: 2,
        suffix: ".png",
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.stun = this.add.sprite(this.worldCenter.x, this.worldCenter.y - deadCharacter.displayHeight, STUN).setScale(0.2);
    this.stun.play(animationKey1);

    const restartButton = this.add.text(deadCharacter.x - deadCharacter.displayWidth, deadCharacter.y + deadCharacter.displayHeight, "Restart!").setOrigin(0.5).setInteractive();
    const quitButton = this.add.text(deadCharacter.x + deadCharacter.displayWidth, deadCharacter.y + deadCharacter.displayHeight, "Quit!").setOrigin(0.5).setInteractive();

    restartButton.on("pointerover", () => {
      restartButton.setStyle({ fill: "red" });
    });

    restartButton.on("pointerout", () => {
      restartButton.setStyle({ fill: "white" });
    });

    restartButton.once("pointerup", () => {
      window.location.reload();
    });

    quitButton.on("pointerover", () => {
      quitButton.setStyle({ fill: "red" });
    });

    quitButton.on("pointerout", () => {
      quitButton.setStyle({ fill: "white" });
    });

    quitButton.on("pointerup", () => {
      this.game.store.score = this.registry.get("score");
      this.game.router("", "/");
      this.game.destroy();
    });
  }

  refresh() {
    this.cameras.main.setPosition(this.zone.x, this.zone.y);

    this.scene.bringToTop();
  }
}
