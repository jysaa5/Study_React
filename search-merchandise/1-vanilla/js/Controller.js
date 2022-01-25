import { TabType } from "./views/TabView.js";

const tag = "[Controller]";
// 생성 시점에 store와 views를 받는다.
export default class Controller {
  constructor(store, { searchFormView, searchResultView, tabView, keywordListView, historyListView }) {
    console.log(tag, "constructor");
    this.store = store;
    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;
    this.keywordListView = keywordListView;
    this.historyListView = historyListView;
    this.subscriveViewEvents();
    this.render();
  }

  subscriveViewEvents() {
    this.searchFormView.on("@submit", (event) => this.search(event.detail.value));
    this.searchFormView.on("@reset", () => this.reset());
    this.tabView.on("@change", (event) => this.changeTab(event.detail.value));
    this.keywordListView.on("@click", (event) => this.search(event.detail.value));
  }

  search(searchKeyword) {
    console.log(tag, searchKeyword);
    this.store.search(searchKeyword);
    this.render();
  }

  reset() {
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
    if (this.store.selectedTab === TabType.KEYWORD) {
      this.keywordListView.show(this.store.getKeywordList());
      this.historyListView.hide();
    } else if (this.store.selectedTab === TabType.HISTORY) {
      this.keywordListView.hide();
      this.historyListView.show(this.store.getHistoryList());
    } else {
      throw "사용할 수 없는 탭입니다. ";
    }
    this.searchResultView.hide();
  }

  renderSearchResult() {
    this.searchFormView.show(this.store.searchKeyword);
    this.tabView.hide();
    this.keywordListView.hide();
    this.historyListView.hide();
    this.searchResultView.show(this.store.searchResult);
  }

  changeTab(tab) {
    console.log(tag, tab);
    this.store.selectedTab = tab;
    this.render();
  }
}
