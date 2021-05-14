import html from "./play.html";
import game from "../../Game/index";

function execute() {
  console.log("play");
  game();
}

export default {
  html,
  execute,
};
