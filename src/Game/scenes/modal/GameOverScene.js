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
      this.parent.backgroundScenes.forEach(background => {
        background.removeCounter();
        background.destroy();
      });
      this.parent.backgroundScenes = [];

      this.parent.platforms.forEach(platform => {
        platform.removeCounter();
        platform.destroy();
      });
      this.parent.platforms = [];

      Object.values(this.parent.enemies).forEach(enemy => {
        enemy.removeCounter();
        enemy.destroy();
      });
      this.parent.enemies = {};

      this.parent.input.removeAllListeners("pointerdown");
      this.parent.input.removeAllListeners("keydown");
      this.parent.matter.world.off("collisionstart");

      this.parent.character && this.parent.character.destroy();
      this.parent.character = null;

      this.parent.startTime = this.time.now;

      this.parent.isGameOver = false;

      this.parent.time.removeEvent(this.parent.timedEvent);
      this.parent.timedEvent = null;

      this.scene.remove();
      this.parent.scene.restart();
    });

    quitButton.on("pointerover", () => {
      quitButton.setStyle({ fill: "red" });
    });

    quitButton.on("pointerout", () => {
      quitButton.setStyle({ fill: "white" });
    });

    quitButton.on("pointerup", () => {
      const score = this.registry.get("score");
      const player = this.game.player;

      this.game.saveRecord(player, score);
      this.game.router("", "/");
    });
  }

  refresh() {
    this.cameras.main.setPosition(this.zone.x, this.zone.y);

    this.scene.bringToTop();
  }
}
