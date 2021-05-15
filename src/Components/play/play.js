import html from "./play.html";
// import game from "../../Game/index";
import store from "../../store/store";

function execute() {
  console.log("play!!");
  // game();
  console.log(store.player);
}

export default {
  html,
  execute,
};
