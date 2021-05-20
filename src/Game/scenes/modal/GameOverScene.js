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
    const player = this.game.player;
    const score = this.registry.get("score");

    this.cameras.main.setBackgroundColor("rgba(0, 0, 0, 0.5)");

    const deadCharacter = new Character(this, this.worldCenter.x, this.worldCenter.y, CHARACTER_DEAD, { isStatic: true }).setScale(0.4);

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

    this.stun = this.add.sprite(this.worldCenter.x, this.worldCenter.y - deadCharacter.displayHeight, STUN).setScale(0.3);
    this.stun.play(animationKey1);

    const restartButton = this.add.text(
      deadCharacter.x - deadCharacter.displayWidth,
      deadCharacter.y + deadCharacter.displayHeight,
      "Restart?",
      {
        fontSize: "30px",
        fontFamily: "fontNaruto",
      }
    ).setOrigin(0.7, 0.5).setInteractive();
    const quitButton = this.add.text(
      restartButton.x + restartButton.displayWidth,
      deadCharacter.y + deadCharacter.displayHeight,
      "Save & Quit?",
      {
        fontSize: "30px",
        fontFamily: "fontNaruto",
      }
    ).setOrigin(0.2, 0.5).setInteractive();
    this.playerNameLabel = this.add.text(
      deadCharacter.x - 10,
      deadCharacter.y + deadCharacter.displayHeight + 50,
      "Player:",
      {
        fontSize: "20px",
        fontFamily: "fontNaruto",
      }
    ).setOrigin(1, 0.5);
    this.playerNameText = this.add.text(
      deadCharacter.x + 30,
      deadCharacter.y + deadCharacter.displayHeight + 50,
      player,
      {
        fontSize: "20px",
        fontFamily: "fontNaruto",
      }
    ).setOrigin(0, 0.5);
    this.scoreLabel = this.add.text(
      deadCharacter.x - 10,
      deadCharacter.y + deadCharacter.displayHeight + 100,
      "Score:",
      {
        fontSize: "20px",
        fontFamily: "fontNaruto",
      }
    ).setOrigin(1, 0.5);
    this.scoreText = this.add.text(
      deadCharacter.x + 30,
      deadCharacter.y + deadCharacter.displayHeight + 100,
      score,
      {
        fontSize: "20px",
        fontFamily: "fontNaruto",
      }
    ).setOrigin(0, 0.5);

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
      this.game.saveRecord(player, score);
      this.game.router("", "/");
    });
  }

  refresh() {
    this.cameras.main.setPosition(this.zone.x, this.zone.y);

    this.scene.bringToTop();
  }
}
