import { emit, on } from "../helpers.js";

const tag = "[View]";
// MVC중 View
export default class View {
  // 생성자
  constructor(element) {
    if (!element) throw "no element";
    console.log(tag, "constructor");
    this.element = element;
    this.originalDisplay = this.element.style.dispaly || "";

    return this;
  }

  hide() {
    this.element.style.display = "none";
    return this;
  }

  show() {
    this.element.style.display = this.originalDisplay; // 보통 block이나 inline 값이 들어온다.
    return this;
  }

  // 사용자와 인터렉션을 하면 DOM은 Event를 발생시킨다. 그 이벤트를 수신하는 것(구독하는 것)의 함수
  on(eventName, handler) {
    on(this.element, eventName, handler); // 유틸리티성 함수
    return this;
  }

  // 이벤트 발행
  emit(eventName, data) {
    emit(this.element, eventName, data);
    return this;
  }
}
