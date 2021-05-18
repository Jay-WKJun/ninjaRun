import html from "./home.html";
import "./home.css";

import backgroundImage from "../../../assets/images/ForestBG.png";
import store from "../../store/store";
import recordDiv from "./record/record";

function execute() {
  const $home = document.getElementById("home");
  const $nameInput = document.getElementById("name__input");
  const $gameStartButton = document.getElementById("game__start");
  const $rankingButton = document.getElementById("ranking__button");
  const $scoreModal = document.getElementById("score__modal");
  const $scoreBoard = document.getElementById("score__board");

  $home.style.backgroundImage = `url(${backgroundImage})`;

  $nameInput.addEventListener("keyup", handleKeyupEvent);

  $gameStartButton.style.display = "none";

  $rankingButton.addEventListener("click", handleRankingButtonClick);

  $scoreModal.style.display = "none";
  $scoreModal.addEventListener("click", handleScoreBoardClick);

  function handleKeyupEvent(e) {
    const inputName = e.target.value;
    store.player = inputName;

    if (inputName === "") {
      $gameStartButton.style.display = "none";
    } else {
      $gameStartButton.style.display = "flex";
    }
  }

  async function handleRankingButtonClick() {
    const scoreBoardDisplay = $scoreModal.style.display;

    if (scoreBoardDisplay === "none") {
      $scoreModal.style.display = "flex";

      const allRecords = await recordDiv();
      $scoreBoard.innerHTML = allRecords;
    }
  }

  function handleScoreBoardClick() {
    const scoreBoardDisplay = $scoreModal.style.display;

    if (scoreBoardDisplay === "flex") {
      $scoreModal.style.display = "none";
    }
  }
}

export default {
  html,
  execute,
};
