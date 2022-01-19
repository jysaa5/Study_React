import View from "./View.js";
import { delegate, qs } from "../helpers.js";
const tag = "[KeywordListView]";

export default class KeywordListView extends View {
  constructor() {
    console.log(tag, "constructor");
    super(qs("#keyword-list-view"));
    this.template = new Template();
    this.bindEvents();
  }

  show(data = []) {
    this.element.innerHTML = data.length > 0 ? this.template.getList(data) : this.template.getEmptyMessage();
    super.show();
  }

  bindEvents() {
    delegate(this.element, "click", "li", (event) => this.handleClick(event));
  }

  handleClick(event) {
    console.log(tag, "handleClick", event.target.dataset.keyword);
    const value = event.target.dataset.keyword;
    console.log(tag, this.handleClick, event.target.dataset.keyowrd);
    this.emit("@click", { value });
  }
}

class Template {
  getEmptyMessage() {
    return `<div class="empty-box">추천 검색어가 없습니다.</div>`;
  }

  getList(data = []) {
    return `<ul class="list">${data.map(this._getItem).join("")}</ul>`;
  }

  _getItem({ id, keyword }) {
    return `<li data-keyword="${keyword}">
      <span class="number">${id}</span>
      ${keyword}
        </li>`;
  }
}