const tag = "[Controller]";
// 생성 시점에 store와 views를 받는다.
export default class Controller {
  constructor(store, { searchFormView }) {
    console.log(tag, "constructor");
    this.store = store;
    this.searchFormView = searchFormView;
    this.subscriveViewEvents();
  }

  subscriveViewEvents() {
    this.searchFormView.on("@submit", (event) => this.search(event.detail.value));
    this.searchFormView.on("@click", () => this.deletSearchResult());
  }

  search(keyword) {
    console.log(tag, keyword);
  }

  deletSearchResult() {
    console.log(tag, "deleteSearchResult");
  }
}
