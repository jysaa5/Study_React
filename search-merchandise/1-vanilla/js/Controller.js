const tag = "[Controller]";
// 생성 시점에 store와 views를 받는다.
export default class Controller {
  constructor(store, { searchFormView, searchResultView }) {
    console.log(tag, "constructor");
    this.store = store;
    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.subscriveViewEvents();
  }

  subscriveViewEvents() {
    this.searchFormView.on("@submit", (event) => this.search(event.detail.value));
    this.searchFormView.on("@click", () => this.rest());
  }

  search(searchKeyword) {
    console.log(tag, searchKeyword);
    this.store.search(searchKeyword);
    this.render();
  }

  rest() {
    console.log(tag, "rest");
  }

  // Controller가 관리하고 있는 view들을 이용해서 화면에 출력하는 것
  render() {
    if (this.store.searchKeyword.length > 0) {
      this.searchResultView.show(this.store.searchResult);
      return;
    }

    this.searchResultView.hide();
  }
}
