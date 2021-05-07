import Phaser from 'phaser';

class BaseScene extends Phaser.Scene {
  constructor(key, config) {
    super(key);
    this.config = config;
    this.screenCenter = [config.width / 2, config.height / 2];
    this.fontSize = 34;
    this.lineHeight = 42;
    this.fontOptions = {fontSize:  `${this.fontSize}px`, fill: '#FFFFFF'  };
  }

  create() {
    this.add.image(0, 0, 'background').setOrigin(0);
  }
}

export default BaseScene;
