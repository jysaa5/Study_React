import View from "./View.js";
import { qs, qsAll, on } from "../helpers.js";

const tag = "[TabView]";

export const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

export default class TabView extends View {
  constructor() {
    console.log(tag, "constructor");
    super(qs("#tab-view"));
    this.template = new Template();
    this.element.innerHTML = this.template.getTabList();
    this.bindEvent();
  }

  show(selectedTab) {
    // this.element.innerHTML = this.template.getTabList();
    qsAll("li", this.element).forEach((li) => {
      console.log(li);
      li.className = li.dataset.tab === selectedTab ? "active" : "";
    });
    super.show();
  }

  bindEvent() {
    console.log(tag, "bindEvent");
    console.log(this.element);
    console.log(document.querySelectorAll("li"));
    qsAll("li", this.element).forEach((li) => {
      console.log(li);
      on(li, "click", () => this.changeResult(li));
    });
  }

  changeResult(element) {
    console.log(tag, "bindEvent");
    console.log(element);
    this.emit("@click", { element });
  }
}

class Template {
  getTabList() {
    return `
        <ul class="tabs">
        ${Object.values(TabType)
          .map((tabType) => ({ tabType, tabLabel: TabLabel[tabType] }))
          .map(this._getTab)
          .join("")}
        </ul>
        `;
  }

  _getTab({ tabType, tabLabel }) {
    return `<li data-tab="${tabType}">
        ${tabLabel}
        </li>`;
  }
}
