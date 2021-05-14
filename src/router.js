import home from "./home/home";
import play from "./play/play";

export const routes = {
  "/": {
    html: home.html,
    js: home.render,
  },
  "/play": {
    html: play.html,
    js: play.render,
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
      window.history.pushState({ data: "test" }, route, route);
      rootDiv.innerHTML = routes[route].html;
      routes[route].js();
    });
  });
}

addRouteEvent();
