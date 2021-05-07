import BaseScene from "./BaseScene";

class PlayScene extends BaseScene {
  constructor(config) {
    super("PlayScene", config);
  }

  create() {
    super.create();
    this.add.image(100, 300, "character")
      .setScale(0.5)
      .setOrigin(0);
  }
}

export default PlayScene;
