// main.js 자바스크립트의 시작점

class App extends React.Component {
  constructor() {
    super();

    // 브라우저가 관리하던 것을 react가 관리하도록 함.
    this.state = {
      searchKeyword: "",
    };
  }

  handleChangeInput(event) {
    //this.state.searchKeyword = event.target.value;
    // render 함수를 다시 부른다.
    //this.forceUpdate();
    // 위와 같은 방식은 handleChangeInput 함수가 controller 역할을 하게 만든다. 그러므로 react를 제대로 사용한 것이 아니다.
    // 아래와 같이 component가 model의 상태가 스스로 변했다는 것을 감지 하도록 변경해줘야 한다.

    const searchKeyword = event.target.value;
    this.setState({
      searchKeyword,
    });
  }

  // render 함수 overriding -> react element를 반환해야 한다. component가 react element 대로 DOM을 그리도록 한다.
  render() {
    // let resetButton = null; // react에서 null은 아무것도 출력을 하지 않는다.
    // if (this.state.searchKeyword.length > 0) {
    //   resetButton = <button type="reset" className="btn-reset"></button>;
    // }
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form>
            <input type="text" placeholder="검색어를 입력해주세요." autoFocus value={this.state.searchKeyword} onChange={(event) => this.handleChangeInput(event)}></input>
            {/* {resetButton} */}
            {/* {this.state.searchKeyword.length > 0 ? <button type="reset" className="btn-reset"></button> : null} */}
            {this.state.searchKeyword.length > 0 && <button type="reset" className="btn-reset"></button>}
          </form>
        </div>
      </>
    );
  }
}
const element = (
  //<div>
  <>
    <header>
      <h2 className="container">검색</h2>
    </header>
    <div className="container">
      <form>
        <input type="text" placeholder="검색어를 입력해주세요." autoFocus></input>
      </form>
    </div>
  </>
  //</div>
); // 자바스크립트 엔진이 자동으로 세미콜론을 붙이는 것을 방지하기 위해 소괄호로 감싼다. -> JSX를 사용할 때 권장하는 방식이다.
//ReactDOM.render(element, document.querySelector("#app"));
ReactDOM.render(<App />, document.querySelector("#app"));
