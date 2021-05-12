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
      (this.worldWidth - 2),
      false
    );
    this.repeatObject(
      this.platforms,
      this.createPlatform,
      this.plaformInterval,
      false
    );

    this.repeatObject(
      Object.values(this.enemies),
      this.createEnemy,
      this.enemyInterval,
      true
    );

    this.checkGameOver();
  };

  repeatObject(objectArray, createFunction, offsetParam, isEnemy) {
    const firstObject = objectArray[0].getBounds();
    const firstObjectRightBound = firstObject.x + firstObject.width;

    if (firstObjectRightBound < 0) {
      const lastObjectPosition = objectArray[objectArray.length - 1].x;

      if (isEnemy) {
        const enemyType = this.getEnemyTypeInRandom();

        delete this.enemies[objectArray[0].body.id];
        createFunction.call(this, enemyType, lastObjectPosition + offsetParam);
      } else {
        objectArray.shift();
        createFunction.call(this, lastObjectPosition + offsetParam);
      }
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
