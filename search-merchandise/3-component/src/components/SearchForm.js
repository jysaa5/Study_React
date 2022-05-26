import React from "react";

export default class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: "",
    };
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;

    if (searchKeyword.length <= 0) {
      this.handleReset();
    }

    this.setState({ searchKeyword });
  }

  handleSubmit(event) {
    event.preventDefault(); // form이 제출 되었을 때, 기본 동작을 막음.
    this.props.onSubmit(this.state.searchKeyword); // prpos의 콜백함수 호출
  }

  handleReset() {
    this.props.onReset();
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)} onReset={() => this.handleReset()}>
        <input type="text" placeholder="검색어를 입력해주세요." autoFocus value={this.state.searchKeyword} onChange={(event) => this.handleChangeInput(event)}></input>
        {this.state.searchKeyword.length > 0 && <button type="reset" className="btn-reset"></button>}
      </form>
    );
  }
}
