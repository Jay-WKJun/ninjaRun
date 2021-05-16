import { routes, addRouteEvent } from "./router";
import "./store/store";

const rootDiv = document.getElementById("root");

window.onpopstate = () => {
  const currentPath = window.location.pathname;

  if (currentPath === "/") {
    window.location.reload();
  }

  rootDiv.innerHTML = routes[currentPath].html;
  routes[currentPath].js();
  addRouteEvent();
};
