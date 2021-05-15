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

  console.log("home!!");
  $home.style.backgroundImage = `url(${backgroundImage})`;

  $gameStartButton.style.display = "none";
  $scoreBoard.style.display = "none";

  $nameInput.addEventListener("keyup", handleKeyupEvent);

  $rankingButton.addEventListener("click", () => {
    const scoreBoardDisplay = $scoreBoard.style.display;
    console.log(scoreBoardDisplay);
    console.log(store.player);

    if (scoreBoardDisplay === "none") {
      $scoreBoard.style.display = "flex";
    }
  });

  $scoreBoard.addEventListener("click", () => {
    const scoreBoardDisplay = $scoreBoard.style.display;
    console.log(store.player);

    if (scoreBoardDisplay === "flex") {
      $scoreBoard.style.display = "none";
    }
  });

  // api에서 받아오면 그걸 리스트해서 scoreBoard에 쭉 그려주면 된다.
  function handleKeyupEvent(e) {
    const inputName = e.target.value;
    console.log(inputName);
    store.player = inputName;

    if (inputName === "") {
      $gameStartButton.style.display = "none";
    } else {
      $gameStartButton.style.display = "flex";
    }
  }
}

export default {
  html,
  execute,
};
