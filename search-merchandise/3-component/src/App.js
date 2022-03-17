import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";
import SearchResult from "./components/SearchResult.js";
import store from "./Store.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false,
    };
  }
  search(searchKeyword) {
    console.log("TODO: search >>>", searchKeyword);
    const searchResult = store.search(searchKeyword);
    this.setState({ searchResult, submitted: true });
  }

  handleReset() {
    console.log("TODO: handleReset");
    this.setState({ searchKeyword: "", submitted: false, searchResul: [] });
  }

  handleChangeInput(searchKeyword) {
    if (searchKeyword.length <= 0) {
      this.handleReset();
    }
    this.setState({ searchKeyword });
  }

  render() {
    const { searchKeyword, submitted, searchResult } = this.state;
    return (
      <>
        <Header title="검색" />
        <div className="container">
          <SearchForm value={searchKeyword} onChange={(value) => this.handleChangeInput(value)} onSubmit={() => this.search(searchKeyword)} onReset={() => this.handleReset()} />
          <div className="content">{submitted && <SearchResult data={searchResult} />}</div>
        </div>
      </>
    );
  }
}
