import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { searchKeyowrd: "" };
  }
  search(searchKeyword) {
    console.log("TODO: search >>>", searchKeyword);
  }

  handleReset() {
    console.log("TODO: handleReset");
  }

  handleChangeInput(searchKeyowrd) {
    this.setState({ searchKeyowrd });
  }

  render() {
    return (
      <>
        <Header title="검색" />
        <div className="container">
          <SearchForm value={this.state.searchKeyowrd} onChange={(value) => this.handleChangeInput(value)} onSubmit={(searchKeyword) => this.search(searchKeyword)} onReset={() => this.handleReset()} />
        </div>
      </>
    );
  }
}
