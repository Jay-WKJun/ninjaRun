import html from "./home.html";
import "./home.css";
import backgroundImage from "../../../assets/images/ForestBG.png";
import store from "../../store/store";

function execute() {
  const $home = document.getElementById("home");
  const $nameInput = document.getElementById("name__input");
  const $gameStartButton = document.getElementById("game__start");
  const $rankingButton = document.getElementById("ranking__button");
  const $scoreBoard = document.getElementById("score__board");

  $home.style.backgroundImage = `url(${backgroundImage})`;

  $gameStartButton.style.display = "none";

  $scoreBoard.style.display = "none";

  $nameInput.addEventListener("keyup", handleKeyupEvent);

  $rankingButton.addEventListener("click", handleRankingButtonClick);

  $scoreBoard.addEventListener("click", handleScoreBoardClick);

  function handleKeyupEvent(e) {
    const inputName = e.target.value;
    store.player = inputName;

    if (inputName === "") {
      $gameStartButton.style.display = "none";
    } else {
      $gameStartButton.style.display = "flex";
    }
  }

  function handleRankingButtonClick() {
    const scoreBoardDisplay = $scoreBoard.style.display;

    if (scoreBoardDisplay === "none") {
      $scoreBoard.style.display = "flex";
    }
  }

  function handleScoreBoardClick() {
    const scoreBoardDisplay = $scoreBoard.style.display;

    if (scoreBoardDisplay === "flex") {
      $scoreBoard.style.display = "none";
    }
  }
}

export default {
  html,
  execute,
};
