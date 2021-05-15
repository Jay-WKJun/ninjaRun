import { routes, addRouteEvent } from "./router";
import "./store/store";

const rootDiv = document.getElementById("root");

window.onpopstate = () => {
  const currentPath = window.location.pathname;
  rootDiv.innerHTML = routes[currentPath].html;
  routes[currentPath].js();
  addRouteEvent();
};
