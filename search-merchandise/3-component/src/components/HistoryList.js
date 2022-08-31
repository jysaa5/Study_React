import React from "react";
import { formatRelativeDate } from "../helpers.js";
import store from "../Store.js";
import { List } from "./List.js";

export default class HistoryList extends List {
  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const data = store.getHistoryList();
    this.setState({ data });
  }

  handleClickRemoveHistory(event, keyword) {
    event.stopPropagation();
    store.removeHistory(keyword);
    this.fetch();
  }

  renderItem(item) {
    return (
      <>
        <span>{item.keyword}</span>
        <span className="date">{formatRelativeDate(item.data)}</span>
        <button className="btn-remove" onClick={(event) => this.handleClickRemoveHistory(event, item.keyword)}></button>
      </>
    );
  }
}
