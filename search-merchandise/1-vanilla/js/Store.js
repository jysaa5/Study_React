const tag = "[Store]";

// MVC중 Model 역할
export default class Store {
  constructor(storage) {
    console.log(tag, "constructor");
    if (!storage) throw "no storage";

    this.storage = storage;
  }
}
