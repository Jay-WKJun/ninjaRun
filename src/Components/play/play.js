import html from "./play.html";
import game from "../../Game/index";

function render() {
  console.log("play");
  game();
}

export default {
  html,
  render,
};
