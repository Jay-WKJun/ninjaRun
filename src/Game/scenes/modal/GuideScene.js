import Phaser from "phaser";
import { GUIDE_SCENE } from "../../constants/scenes";

const WOOD_PANEL = "woodPanel";
const WOOD_ROUND_PANEL = "woodRoundPanel";
const WOOD_TITLE_PANEL = "woodTitlePanel";
const RED_CROSS = "redCross";
const CLICK = "click";
const SHURIKEN = "shuriken";
const MOUSE_CURSOR = "mouseCursor";
const A_KEY = "Akey";
const D_KEY = "Dkey";
const PLATFORM = "platform";
const RED_BIRD = "redBird";
const PLUS_ONE = "plusOne";
const WHITE_CIRCLE = "whiteCircle";

export default class GuideScene extends Phaser.Scene {
  constructor(parent, nextScene, zone, width, height) {
    super(GUIDE_SCENE);

    this.parent = parent;
    this.nextScene = nextScene;
    this.zone = zone;
    this.worldWidth = width;
    this.worldHeigth = height;
    this.worldCenter = { x: width / 2, y: height / 2 };
  }

  preload() {
    this.load.image(WOOD_PANEL, "assets/images/Game/guide/woodPanel.png");
    this.load.image(WOOD_TITLE_PANEL, "assets/images/Game/guide/woodTitlePanel.png");
    this.load.image(WOOD_ROUND_PANEL, "assets/images/Game/guide/woodRoundPanel.png");
    this.load.image(RED_CROSS, "assets/images/Game/guide/redCross.png");

    this.load.image(CLICK, "assets/images/Game/guide/click.png");
    this.load.image(SHURIKEN, "assets/images/Game/shuriken_spin.png");
    this.load.image(MOUSE_CURSOR, "assets/images/Game/guide/mouseCursor.png");

    this.load.image(A_KEY, "assets/images/Game/guide/Akey.png");
    this.load.image(D_KEY, "assets/images/Game/guide/Dkey.png");

    this.load.image(PLATFORM, "assets/images/Game/pad_small.png");

    this.load.image(RED_BIRD, "assets/images/Game/guide/redBirdForguide.png");
    this.load.image(PLUS_ONE, "assets/images/Game/guide/plusOne.png");
    this.load.image(WHITE_CIRCLE, "assets/images/Game/guide/whiteCircle.png");
  }

  create() {
    this.parent.scene.pause();

    this.cameras.main.setBackgroundColor("rgba(0, 0, 0, 0.5)");

    this.woodPanel = this.add.image(this.worldCenter.x, this.worldCenter.y, WOOD_PANEL).setOrigin(0.5).setScale(0.6);
    this.woodPanel.setDisplaySize(this.worldWidth * 0.9, this.worldHeigth * 0.9);

    const minX = this.worldCenter.x - (this.woodPanel.displayWidth / 2);
    const maxX = this.worldCenter.x + (this.woodPanel.displayWidth / 2);
    const minY = this.worldCenter.y - (this.woodPanel.displayHeight / 2);

    this.woodTitlePanel = this.add.image(this.worldCenter.x, minY, WOOD_TITLE_PANEL).setOrigin(0.5, 0.3).setScale(0.2);

    this.woodRoundPanel = this.add.image(maxX, minY, WOOD_ROUND_PANEL).setOrigin(1, 0.3).setScale(0.1);

    this.redCrossShadow = this.add.image(maxX - 15 + 5, minY + 5, RED_CROSS).setOrigin(1, 0.1).setScale(0.1).setVisible(false);
    this.redCrossShadow.tint = 0x000000;
    this.redCrossShadow.alpha = 0.6;

    this.redCross = this.add.image(maxX - 15, minY, RED_CROSS).setOrigin(1, 0.1).setScale(0.1).setInteractive();

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

    this.guideTitleText = this.add.text(this.worldCenter.x, minY, "How To Play!", {
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

    this.click = this.add.image(indentedXPosition, firstLineYCordinate, CLICK).setScale(0.2).setOrigin(0, 0.6);

    const xPositionOfTextBeforeClick = indentedXPosition + this.click.displayWidth + whiteSpaceInterval;

    this.textBeforeClick = this.add.text(xPositionOfTextBeforeClick, firstLineYCordinate, "to Shoot", {
      fontSize,
    });

    const xPositionOfShurikent = xPositionOfTextBeforeClick + this.textBeforeClick.displayWidth + whiteSpaceInterval;

    this.shuriken = this.add.image(xPositionOfShurikent, firstLineYCordinate, SHURIKEN).setOrigin(0, 0.3);

    const xPositionOfTextBeforeShuriken = xPositionOfShurikent + this.shuriken.displayWidth + whiteSpaceInterval;

    this.textBeforeShuriken = this.add.text(xPositionOfTextBeforeShuriken, firstLineYCordinate, "to", {
      fontSize,
    });

    const xPositionOfMouseCursor = xPositionOfTextBeforeShuriken + this.textBeforeShuriken.displayWidth + whiteSpaceInterval;

    this.mouseCursor = this.add.image(xPositionOfMouseCursor, firstLineYCordinate, MOUSE_CURSOR).setScale(0.1).setOrigin(0, 0.4);

    const secondLineYCordinate = firstLineYCordinate + textLineHeight;

    this.Akey = this.add.image(indentedXPosition, secondLineYCordinate, A_KEY).setScale(0.6).setOrigin(0, 0.3);

    const xPositionOfDkey = indentedXPosition + this.Akey.displayWidth + whiteSpaceInterval;

    this.Dkey = this.add.image(xPositionOfDkey, secondLineYCordinate, D_KEY).setScale(0.6).setOrigin(0, 0.3);

    const xPositionOfTextBeforeDkey = xPositionOfDkey + this.Dkey.displayWidth + whiteSpaceInterval;

    this.textBeforeDkey = this.add.text(xPositionOfTextBeforeDkey, secondLineYCordinate, "to Accelerate Swing!", {
      fontSize,
    });

    const thirdLineYCordinate = secondLineYCordinate + textLineHeight;

    this.thirdLineFirstText = this.add.text(indentedXPosition, thirdLineYCordinate, "Hit", {
      fontSize,
    });

    const xPositionOfPlatform = indentedXPosition + this.thirdLineFirstText.displayWidth + whiteSpaceInterval;

    this.platform = this.add.image(xPositionOfPlatform, thirdLineYCordinate, PLATFORM).setOrigin(0, 0.1).setScale(0.5);

    const xPositionOfTextBeforePlatform = xPositionOfPlatform + this.platform.displayWidth + whiteSpaceInterval;

    this.textBeforePlatform = this.add.text(xPositionOfTextBeforePlatform, thirdLineYCordinate, "to Swing!", {
      fontSize,
    });

    const forthLineYCordinate = thirdLineYCordinate + textLineHeight;

    this.forthLineFirstText = this.add.text(indentedXPosition, forthLineYCordinate, "Hit", {
      fontSize,
    });

    const xPositionOfRedBird = indentedXPosition + this.forthLineFirstText.displayWidth + whiteSpaceInterval;

    this.redBird = this.add.image(xPositionOfRedBird, forthLineYCordinate, RED_BIRD).setOrigin(0, 0.2).setScale(0.1);

    const xPositionOfTextBeforeRedBird = xPositionOfRedBird + this.redBird.displayWidth + whiteSpaceInterval;

    this.textBeforeRedBird = this.add.text(xPositionOfTextBeforeRedBird, forthLineYCordinate, "or Each 10 Sec, Score", {
      fontSize,
    });

    const xPositionOfPlusOne = xPositionOfTextBeforeRedBird + this.textBeforeRedBird.displayWidth + whiteSpaceInterval;

    this.whiteCircle = this.add.image(xPositionOfPlusOne - 3, forthLineYCordinate + 5, WHITE_CIRCLE).setOrigin(0.2, 0.4).setScale(0.3);

    this.plusOne = this.add.image(xPositionOfPlusOne, forthLineYCordinate, PLUS_ONE).setOrigin(0, 0.4).setScale(0.2);
  }
}
