import { loadPage } from "./router";
import "./store/store";

import fontNaruto from "../assets/font/njnaruto.ttf";

const fontFace = new FontFace("fontNaruto", `url(${fontNaruto})`);

fontFace.load().then((loadedFace) => {
  document.fonts.add(loadedFace);
});

const $root = document.getElementById("root");

$root.style.fontFamily = "fontNaruto";

window.onpopstate = () => {
  const currentPath = window.location.pathname;

  if (currentPath === "/") {
    window.location.reload();
    window.onload(() => loadPage(currentPath));
  } else {
    loadPage(currentPath);
  }
};
