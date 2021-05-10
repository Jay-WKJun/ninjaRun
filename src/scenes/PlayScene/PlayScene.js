import Phaser from "phaser";
import initPlayScene from "./initPlayScene";

class PlayScene extends initPlayScene {
  update() {
    if (this.backgroundScenes.length) {
      const firstBackgroundScene = this.backgroundScenes[0].getBounds();
      const firstBackgroundRightBound = firstBackgroundScene.x + firstBackgroundScene.width;

      if (firstBackgroundRightBound < 0) {
        const lastBackgroundPosition = this.backgroundScenes[this.backgroundScenes.length - 1].x;

        this.backgroundScenes.shift();
        this.createBackground(lastBackgroundPosition + (this.worldWidth - 2));
      }
    }

    if (this.rope) {
      this.rotateCharacterToRopeDirection();
      this.drawRope();
    }

    this.destroyShurikenWhenWorldOut();

    if (this.platforms.length) {
      const firstPlatformBound = this.platforms[0].getBounds();
      const firstPlatformRightBound = firstPlatformBound.x + firstPlatformBound.width;

      if (firstPlatformRightBound < 0) {
        const lastPlatFormPosition = this.platforms[this.platforms.length - 1].x;

        this.platforms.shift();
        this.createPlatform(lastPlatFormPosition + this.plaformInterval);
      }
    }

    if (this.enemies.length) {
      const firstEnemyBound = this.enemies[0].getBounds();
      const enemyRightPosition = firstEnemyBound.x + firstEnemyBound.width;

      if (enemyRightPosition < 0) {
        const lastEnemyPosition = this.enemies[this.enemies.length - 1].x;
        const enemyType = this.getEnemyTypeInRandom();

        this.enemies.shift();
        this.createEnemy(enemyType, lastEnemyPosition + this.enemyInterval);
      }
    }

    this.checkGameOver();
  };

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

    this.matter.world.renderConstraint(this.rope, this.line, 0xffffff, 1, 2, 1, 0x000000, 1);
  }

  destroyShurikenWhenWorldOut() {
    const isShurikenOutOfWorld = () => {
      return (
        (this.shuriken.x > this.config.width) ||
        (this.shuriken.x < 0) ||
        (this.shuriken.y > this.config.height) ||
        (this.shuriken.y < 0)
      );
    };

    if ((this.shuriken && !this.rope)) {
      if (isShurikenOutOfWorld()) {
        this.deleteShuriken();
      }
    }
  }

  checkGameOver() {
    const isCharacterOutOfDeadZone = () => {
      return (
        (this.character.x > this.config.deadZone.maxX) ||
        (this.character.x < this.config.deadZone.minX) ||
        (this.character.y > this.config.deadZone.maxY) ||
        (this.character.y < this.config.deadZone.minY)
      );
    };

    if (this.character) {
      if (isCharacterOutOfDeadZone()) {
        console.log("Dead!!");
      }
    }
  }
}

export default PlayScene;
