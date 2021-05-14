import { routes, addRouteEvent } from "./router";

const rootDiv = document.getElementById("root");

window.onpopstate = () => {
  const currentPath = window.location.pathname;
  rootDiv.innerHTML = routes[currentPath].html;
  routes[currentPath].js();
  addRouteEvent();
};
