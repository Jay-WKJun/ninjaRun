import Phaser from "phaser";

import Character from "../objects/Character";
import { GAMEOVER_SCENE } from "../constants/scenes";
import { CHARACTER_DEAD, STUN } from "../constants/textureNames";

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

    const button = document.createElement("div");
    button.className = "restart";
    button.textContent = "Restart!";

    this.restartButton = this.add.text(deadCharacter.x - deadCharacter.displayWidth, deadCharacter.y + deadCharacter.displayHeight, "Restart!").setOrigin(0.5).setInteractive();
    this.quitButton = this.add.text(deadCharacter.x + deadCharacter.displayWidth, deadCharacter.y + deadCharacter.displayHeight, "Quit!").setOrigin(0.5).setInteractive();

    this.restartButton.on("pointerover", () => {
      this.restartButton.setStyle({ fill: "red" });
    });

    this.restartButton.on("pointerout", () => {
      this.restartButton.setStyle({ fill: "white" });
    });

    this.restartButton.once("pointerup", () => {
      window.location.reload();
    });

    this.quitButton.on("pointerover", () => {
      this.quitButton.setStyle({ fill: "red" });
    });

    this.quitButton.on("pointerout", () => {
      this.quitButton.setStyle({ fill: "white" });
    });
  }

  refresh() {
    this.cameras.main.setPosition(this.zone.x, this.zone.y);

    this.scene.bringToTop();
  }
}
