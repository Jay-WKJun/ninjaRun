import Phaser from "phaser";

export default class GuideScene extends Phaser.Scene {
  constructor(parent, nextScene, zone, width, height) {
    super("GuideScene");

    this.parent = parent;
    this.nextScene = nextScene;
    this.zone = zone;
    this.worldWidth = width;
    this.worldHeigth = height;
    this.worldCenter = { x: width / 2, y: height / 2 };
  }

  preload() {
    this.load.image("woodPanel", "assets/images/guide/woodPanel.png");
    this.load.image("woodRoundPanel", "assets/images/guide/woodRoundPanel.png");
    this.load.image("woodTitlePanel", "assets/images/guide/woodTitlePanel.png");
    this.load.image("redCross", "assets/images/guide/redCross.png");

    this.load.image("click", "assets/images/guide/click.png");
    this.load.image("shuriken", "assets/images/shuriken_spin.png");
    this.load.image("mouseCursor", "assets/images/guide/mouseCursor.png");

    this.load.image("Akey", "assets/images/guide/Akey.png");
    this.load.image("Dkey", "assets/images/guide/Dkey.png");

    this.load.image("platform", "assets/images/pad_small.png");
    this.load.image("hangingCapture", "assets/images/guide/hangingCapture.png");

    this.load.image("redBird", "assets/images/guide/redBirdForguide.png");
    this.load.image("plusOne", "assets/images/guide/plusOne.png");
    this.load.image("whiteCircle", "assets/images/guide/whiteCircle.png");
  }

  create() {
    this.parent.scene.pause();

    this.cameras.main.setBackgroundColor("rgba(0, 0, 0, 0.5)");

    this.woodPanel = this.add.image(this.worldCenter.x, this.worldCenter.y, "woodPanel").setOrigin(0.5).setScale(0.6);
    this.woodPanel.setDisplaySize(this.worldWidth * 0.9, this.worldHeigth * 0.9);

    const minX = this.worldCenter.x - (this.woodPanel.displayWidth / 2);
    const maxX = this.worldCenter.x + (this.woodPanel.displayWidth / 2);
    const minY = this.worldCenter.y - (this.woodPanel.displayHeight / 2);

    this.woodTitlePanel = this.add.image(this.worldCenter.x, minY, "woodTitlePanel").setOrigin(0.5, 0.3).setScale(0.2);

    this.woodRoundPanel = this.add.image(maxX, minY, "woodRoundPanel").setOrigin(1, 0.3).setScale(0.1);

    this.redCrossShadow = this.add.image(maxX - 15 + 5, minY + 5, "redCross").setOrigin(1, 0.1).setScale(0.1).setVisible(false);
    this.redCrossShadow.tint = 0x000000;
    this.redCrossShadow.alpha = 0.6;

    this.redCross = this.add.image(maxX - 15, minY, "redCross").setOrigin(1, 0.1).setScale(0.1).setInteractive();

    this.redCross.on("pointerover", () => {
      this.redCrossShadow.setVisible(true);
    });

    this.redCross.on("pointerout", () => {
      this.redCrossShadow.setVisible(false);
    });

    this.redCross.on("pointerup", () => {
      window.localStorage.setItem("isVisit", true);

      this.scene.remove();

      this.parent.scene.add(this.nextScene.key, this.nextScene.object, true);
      this.parent.scene.resume();
    });

    this.titleText = this.add.text(this.worldCenter.x, minY, "How To Play!", {
      fontSize: "40px",
      fontStyle: "bold",
    }).setOrigin(0.45, 0);

    const fontSize = "40px";
    const textYOffset = 100;
    const textLineHeight = 130;
    const textIndenting = 70;
    const whiteSpaceInterval = 30;

    const indentedXPosition = minX + textIndenting;
    const firstLineYCordinate = minY + textYOffset;

    this.click = this.add.image(indentedXPosition, firstLineYCordinate, "click").setScale(0.2).setOrigin(0, 0.6);

    const xPositionOfTextBeforeClick = indentedXPosition + this.click.displayWidth + whiteSpaceInterval;

    this.textBeforeClick = this.add.text(xPositionOfTextBeforeClick, firstLineYCordinate, "to Shoot", {
      fontSize,
    });

    const xPositionOfShurikent = xPositionOfTextBeforeClick + this.textBeforeClick.displayWidth + whiteSpaceInterval;

    this.shuriken = this.add.image(xPositionOfShurikent, firstLineYCordinate, "shuriken").setOrigin(0, 0.3);

    const xPositionOfTextBeforeShuriken = xPositionOfShurikent + this.shuriken.displayWidth + whiteSpaceInterval;

    this.textBeforeShuriken = this.add.text(xPositionOfTextBeforeShuriken, firstLineYCordinate, "to", {
      fontSize,
    });

    const xPositionOfMouseCursor = xPositionOfTextBeforeShuriken + this.textBeforeShuriken.displayWidth + whiteSpaceInterval;

    this.mouseCursor = this.add.image(xPositionOfMouseCursor, firstLineYCordinate, "mouseCursor").setScale(0.1).setOrigin(0, 0.4);

    const secondLineYCordinate = firstLineYCordinate + textLineHeight;

    this.Akey = this.add.image(indentedXPosition, secondLineYCordinate, "Akey").setScale(0.6).setOrigin(0, 0.3);

    const xPositionOfDkey = indentedXPosition + this.Akey.displayWidth + whiteSpaceInterval;

    this.Dkey = this.add.image(xPositionOfDkey, secondLineYCordinate, "Dkey").setScale(0.6).setOrigin(0, 0.3);

    const xPositionOfTextBeforeDkey = xPositionOfDkey + this.Dkey.displayWidth + whiteSpaceInterval;

    this.textBeforeDkey = this.add.text(xPositionOfTextBeforeDkey, secondLineYCordinate, "to Accelerate Swing!", {
      fontSize,
    });

    const thirdLineYCordinate = secondLineYCordinate + textLineHeight;

    this.thirdLineFirstText = this.add.text(indentedXPosition, thirdLineYCordinate, "Hit", {
      fontSize,
    });

    const xPositionOfPlatform = indentedXPosition + this.thirdLineFirstText.displayWidth + whiteSpaceInterval;

    this.platform = this.add.image(xPositionOfPlatform, thirdLineYCordinate, "platform").setOrigin(0, 0.1).setScale(0.5);

    const xPositionOfTextBeforePlatform = xPositionOfPlatform + this.platform.displayWidth + whiteSpaceInterval;

    this.textBeforePlatform = this.add.text(xPositionOfTextBeforePlatform, thirdLineYCordinate, "to Swing!", {
      fontSize,
    });

    const forthLineYCordinate = thirdLineYCordinate + textLineHeight;

    this.forthLineFirstText = this.add.text(indentedXPosition, forthLineYCordinate, "Hit", {
      fontSize,
    });

    const xPositionOfRedBird = indentedXPosition + this.forthLineFirstText.displayWidth + whiteSpaceInterval;

    this.redBird = this.add.image(xPositionOfRedBird, forthLineYCordinate, "redBird").setOrigin(0, 0.2).setScale(0.1);

    const xPositionOfTextBeforeRedBird = xPositionOfRedBird + this.redBird.displayWidth + whiteSpaceInterval;

    this.textBeforeRedBird = this.add.text(xPositionOfTextBeforeRedBird, forthLineYCordinate, "or Each 10 Sec, Score", {
      fontSize,
    });

    const xPositionOfPlusOne = xPositionOfTextBeforeRedBird + this.textBeforeRedBird.displayWidth + whiteSpaceInterval;

    this.whiteCircle = this.add.image(xPositionOfPlusOne - 3, forthLineYCordinate + 5, "whiteCircle").setOrigin(0.2, 0.4).setScale(0.3);

    this.plusOne = this.add.image(xPositionOfPlusOne, forthLineYCordinate, "plusOne").setOrigin(0, 0.4).setScale(0.2);
  }
}
