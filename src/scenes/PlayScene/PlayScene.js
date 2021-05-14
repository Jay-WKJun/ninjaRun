import Phaser from "phaser";
import initPlayScene from "./initPlayScene";

class PlayScene extends initPlayScene {
  update() {
    if (this.isGameOver && this.timedEvent) this.timedEvent.destroy();

    if (this.rope) {
      if (this.isGameOver) this.removeConstraintAndRope();

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

    this.respawnEnemy();
    this.checkGameOver();
  };

  isPassedDisplay(object) {
    const rightBound = object.getBounds();
    return (rightBound.x + rightBound.width) < this.deadZone.minX;
  }

  repeatObject(objectArray, createFunction, offsetParam) {
    const firstObject = objectArray[0];

    if (this.isPassedDisplay(firstObject)) {
      const lastObjectPosition = objectArray[objectArray.length - 1].x;

      const shiftedObject = objectArray.shift();
      shiftedObject.removeCounter();
      shiftedObject.destroy();
      createFunction.call(this, lastObjectPosition + offsetParam);
    }
  }

  respawnEnemy() {
    const enemies = Object.values(this.enemies);
    const firstEnemy = enemies[0];
    const lastEnemy = enemies[enemies.length - 1];
    let multipleFactor = 1;

    if (this.isPassedDisplay(firstEnemy)) {
      this.deleteEnemy(firstEnemy, firstEnemy.body.id);
    }

    while (Object.keys(this.enemies).length <= this.enemyNumberLimit) {
      const xOffset = this.enemyInterval * multipleFactor;

      this.createEnemy(lastEnemy.x + xOffset);
      multipleFactor++;
    }
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
        (this.shuriken.x > this.worldWidth) ||
        (this.shuriken.x < 0) ||
        (this.shuriken.y > this.worldHeight) ||
        (this.shuriken.y < 0)
      );
    };

    if ((this.shuriken && !this.rope)) {
      if (this.isGameOver || isShurikenOutOfWorld()) {
        this.deleteShuriken();
      }
    }
  }

  checkGameOver() {
    if (this.isGameOver) return;

    const isCharacterOutOfDeadZone = () => {
      return (
        (this.character.x > this.deadZone.maxX) ||
        (this.character.x < this.deadZone.minX) ||
        (this.character.y > this.deadZone.maxY) ||
        (this.character.y < this.deadZone.minY)
      );
    };

    if (this.character) {
      if (isCharacterOutOfDeadZone()) {
        this.gameOver();
      }
    }
  }
}

export default PlayScene;
