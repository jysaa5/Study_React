const tag = "[Controller]";
// 생성 시점에 store와 views를 받는다.
export default class Controller {
  constructor(store, { searchFormView, searchResultView, tabView }) {
    console.log(tag, "constructor");
    this.store = store;
    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;
    this.subscriveViewEvents();
    this.render();
  }

  subscriveViewEvents() {
    this.searchFormView.on("@submit", (event) => this.search(event.detail.value));
    this.searchFormView.on("@click", () => this.rest());
    this.tabView.on("@click", (event) => this.changeSearchWord(event.detail.element));
  }

  search(searchKeyword) {
    console.log(tag, searchKeyword);
    this.store.search(searchKeyword);
    this.render();
  }

  rest() {
    console.log(tag, "rest");
    this.store.searchKeyword = "";
    this.store.searchResult = [];
    this.render();
  }

  // Controller가 관리하고 있는 view들을 이용해서 화면에 출력하는 것
  render() {
    if (this.store.searchKeyword.length > 0) {
      return this.renderSearchResult();
    }
    this.tabView.show(this.store.selectedTab);
    this.searchResultView.hide();
  }

  renderSearchResult() {
    this.tabView.hide();
    this.searchResultView.show(this.store.searchResult);
  }

  changeSearchWord(element) {
    this.tabView.show(element.dataset.tab);
  }
}
