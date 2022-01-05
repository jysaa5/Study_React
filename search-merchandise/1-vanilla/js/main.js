import Controller from "./Controller.js";
import Store from "./store.js";
import storage from "./storage.js";

// main.js: 애플리케이션의 진입점
document.addEventListener("DOMContentLoaded", main);

function main() {
  const store = new Store(storage);

  const views = {
    // TODO
  };

  new Controller(store, views);
}
