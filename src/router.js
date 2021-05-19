import home from "./Components/home/home";
import play from "./Components/play/play";

export const routes = {
  "/play": {
    html: home.html,
    js: home.execute,
  },
  "/": {
    html: play.html,
    js: play.execute,
  },
};

const rootDiv = document.getElementById("root");
const currentRoute = window.location.pathname;

rootDiv.innerHTML = routes[currentRoute].html;
routes[currentRoute].js();

export function addRouteEvent() {
  const routeButtons = document.getElementsByClassName("route");

  Array.from(routeButtons).forEach(routeButton => {
    routeButton.addEventListener("click", () => {
      const route = routeButton.getAttribute("route");

      moveToRoute("test", route);
    });
  });
}

export function moveToRoute(data, route) {
  window.history.pushState({ data }, route, route);

  if (route === "/") {
    window.location.reload();
    window.onload(() => loadPage(route));
  } else {
    loadPage(route);
  }
}

export function loadPage(route) {
  rootDiv.innerHTML = routes[route].html;
  routes[route].js();
  addRouteEvent();
}

addRouteEvent();
