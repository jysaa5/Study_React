// main.js 자바스크립트의 시작점

class App extends React.Component {
  // render 함수 overriding -> react element를 반환해야 한다. component가 react element 대로 DOM을 그리도록 한다.
  render() {
    return (
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
