import React from "react";

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: "",
    };
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;
    this.setState({ searchKeyword });
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="검색어를 입력해주세요." autoFocus value={this.state.searchKeyword} onChange={(event) => this.handleChangeInput(event)}></input>
        {this.state.searchKeyword.length > 0 && <button type="reset" className="btn-reset"></button>}
      </form>
    );
  }
}
