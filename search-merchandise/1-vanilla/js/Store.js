import { createNextId } from "./helpers.js";
import { TabType } from "./views/TabView.js";
const tag = "[Store]";

// MVC중 Model 역할
export default class Store {
  constructor(storage) {
    console.log(tag, "constructor");
    if (!storage) throw "no storage";

    this.storage = storage;

    this.searchKeyword = "";
    this.searchResult = [];
    this.selectedTab = TabType.KEYWORD;
  }

  search(keyword) {
    this.searchKeyword = keyword;
    this.searchResult = this.storage.productData.filter((product) => product.name.includes(keyword));
    this.addHistory(keyword);
  }

  getKeywordList() {
    return this.storage.keywordData;
  }

  getHistoryList() {
    return this.storage.historyData.sort(this._sortHistory);
  }

  _sortHistory(history1, history2) {
    return history2.date > history1.date;
  }

  removeHistory(keyowrd) {
    this.storage.historyData = this.storage.historyData.filter((history) => history.keyword !== keyowrd);
  }

  addHistory(keyowrd) {
    keyowrd = keyowrd.trim();
    if (!keyowrd) {
      return;
    }

    const hasHistory = this.storage.historyData.some((history) => history.keyowrd === keyword);
    if (hasHistory) {
      this.removeHistory(keyowrd);
    }

    const id = createNextId;
  }
}
