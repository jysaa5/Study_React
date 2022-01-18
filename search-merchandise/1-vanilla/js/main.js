import Controller from "./Controller.js";
import Store from "./store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";
import SearchResultView from "./views/SearchResultView.js";
import TabView from "./views/TabView.js";
import KeywordListView from "./views/KeywordListView.js";

const tag = "[main]";

// main.js: 애플리케이션의 진입점
// DOMContentLoaded: DOM이 로딩이 완료 되었을 때
document.addEventListener("DOMContentLoaded", main);

// MVC의 각 객체들을 초기화 해주는 역할
function main() {
  console.log(tag, "main");
  // Model 생성
  const store = new Store(storage);

  const views = {
    searchFormView: new SearchFormView(),
    searchResultView: new SearchResultView(),
    tabView: new TabView(),
    keywordListView: new KeywordListView(),
  };

  new Controller(store, views);
}
