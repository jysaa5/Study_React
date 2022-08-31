import React from "react";
import List from "./List.js";
import store from "../Store.js";

export default class HistoryList extends List {
  componentDidMount() {
    const data = store.getHistoryList();
    this.setState({ data });
  }
  renderItem(item, index) {
    return (
      <>
        <span className="number">{index + 1}</span>
        <span>{item.keyword}</span>
      </>
    );
  }
}
