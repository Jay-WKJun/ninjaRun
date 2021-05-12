import Phaser from "phaser";
import initPlayScene from "./initPlayScene";

class PlayScene extends initPlayScene {
  update() {
    if (this.rope) {
      this.rotateCharacterToRopeDirection();
      this.drawRope();
    }

    this.destroyShurikenWhenWorldOut();

    this.repeatObject(
      this.backgroundScenes,
      this.createBackground,
      (this.worldWidth - 2)
    );
    this.repeatObject(
      this.platforms,
      this.createPlatform,
      this.plaformInterval
    );

    while (Object.keys(this.enemies).length <= 5) {
      this.respawnEnemy();
    }

    this.checkGameOver();
  };

  isPassedDisplay(object) {
    const rightBound = object.getBounds();
    return (rightBound.x + rightBound.width) < 0;
  }

  repeatObject(objectArray, createFunction, offsetParam) {
    const firstObject = objectArray[0];

    if (this.isPassedDisplay(firstObject)) {
      const lastObjectPosition = objectArray[objectArray.length - 1].x;

      objectArray.shift();
      createFunction.call(this, lastObjectPosition + offsetParam);
    }
  }

  respawnEnemy() {
    const enemies = Object.values(this.enemies);
    const firstEnemy = enemies[0];
    const lastEnemy = enemies[enemies.length - 1];
    const enemyType = this.getEnemyTypeInRandom();

    if (this.isPassedDisplay(firstEnemy)) {
      this.deleteEnemy(firstEnemy, firstEnemy.body.id);
      this.createEnemy(enemyType, lastEnemy.x + this.enemyInterval);

      return;
    }

    this.createEnemy(enemyType, lastEnemy.x + this.enemyInterval);
  }

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
