const tag = "[store]";

// MVC중 Model 역할
export default class Store {
  constructor(storage) {
    if (!storage) throw "no storage";

    this.storage = storage;
  }
}
