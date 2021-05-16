import html from "./play.html";
import "./play.css";

import store from "../../store/store";
import Game from "../../Game/index";
import { moveToRoute } from "../../router";
import { postRecord } from "../../api/recordApi";

let currentGame;

function execute() {
  currentGame = Game();
  currentGame.player = store.player;
  currentGame.saveRecord = postRecord;
  currentGame.router = moveToRoute;

  document.getElementById("game__off").addEventListener("click", () => {
    if (currentGame) {
      currentGame.destroy(true);
      currentGame = null;
    } else {
      currentGame = Game();
    }
  });
}

export default {
  html,
  execute,
};
