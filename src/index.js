import { routes, addRouteEvent } from "./router";
import "./store/store";

const rootDiv = document.getElementById("root");

window.onpopstate = () => {
  const currentPath = window.location.pathname;
  console.log(currentPath);

  if (currentPath === "/") {
    window.location.reload();
  }

  rootDiv.innerHTML = routes[currentPath].html;
  routes[currentPath].js();
  addRouteEvent();
};
