import { qs, on } from "../helpers.js";
import View from "./View.js";
const tag = "[SearchFormView]";
export default class SearchFormView extends View {
  constructor() {
    console.log(tag, "constructor");
    super(qs("#search-form-view"));
    this.inputElement = qs("[type=text]", this.element);
    this.resetElement = qs("[type=reset]", this.element);
    this.showResetButton(false);
    this.bindEvent();
  }

  showResetButton(visible = ture) {
    this.resetElement.style.display = visible ? "block" : "none";
  }

  bindEvent() {
    on(this.inputElement, "keyup", () => this.handleKeyup());
    on(this.element, "submit", (event) => this.handleSubmit(event));
    on(this.resetElement, "click", () => this.handleClick());
  }

  handleKeyup() {
    console.log(tag, "handleKeyUp", this.inputElement.value);
    const { value } = this.inputElement;
    this.showResetButton(value.length > 0);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(tag, "handleSubmit");
    // 검색어
    const { value } = this.inputElement;
    // 커스텀 이벤트
    this.emit("@submit", { value });
  }

  handleClick() {
    console.log(tag, "handleClick");
    this.emit("@click");
  }
}
