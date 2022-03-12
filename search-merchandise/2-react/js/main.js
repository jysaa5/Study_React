// main.js 자바스크립트의 시작점
import store from "./js/Store.js";
import { formatRelativeDate } from "./js/helpers.js";

const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

class App extends React.Component {
  constructor() {
    super();

    // 브라우저가 관리하던 것을 react가 관리하도록 함.
    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false, // 검색 자체를 했는지 안했는지 여부
      selectedTab: TabType.KEYWORD,
      keywordList: [],
      historyList: [],
    };
  }

  handleChangeInput(event) {
    //this.state.searchKeyword = event.target.value;
    // render 함수를 다시 부른다.
    //this.forceUpdate();
    // 위와 같은 방식은 handleChangeInput 함수가 controller 역할을 하게 만든다. 그러므로 react를 제대로 사용한 것이 아니다.
    // 아래와 같이 component가 model의 상태가 스스로 변했다는 것을 감지 하도록 변경해줘야 한다.

    const searchKeyword = event.target.value;
    if (searchKeyword.length <= 0 && this.state.submitted) {
      return this.handleReset();
    }
    this.setState({
      searchKeyword,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("TODO: handleSubmit", this.state.searchKeyword);
    this.search(this.state.searchKeyword);
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    const historyList = store.getHistoryList();
    this.setState({ searchKeyword, searchResult, historyList, submitted: true }); // 변경된 것만 병합되는 방식이므로 searchKeyword는 변경되지 않는다.
  }

  handleReset() {
    //this.setState({ searchKeyword: "" }); // 비동기로 처리된다. -> 나중에 실행된다.
    this.setState(
      () => {
        return { searchKeyword: "", submitted: false, searchResult: [] };
      },
      () => {
        console.log("TODO: handleReset", this.state.searchKeyword);
      }
    );
  }

  handleClickRemoveHistory(event, keyword) {
    event.stopPropagation(); // 이벤트 버블링을 막는다.
    store.removeHistory(keyword);
    const historyList = store.getHistoryList();
    this.setState({ historyList });
  }

  componentDidMount() {
    const keywordList = store.getKeywordList();
    const historyList = store.getHistoryList();
    this.setState({ keywordList, historyList });
  }

  // render 함수 overriding -> react element를 반환해야 한다. component가 react element 대로 DOM을 그리도록 한다.
  render() {
    // let resetButton = null; // react에서 null은 아무것도 출력을 하지 않는다.
    // if (this.state.searchKeyword.length > 0) {
    //   resetButton = <button type="reset" className="btn-reset"></button>;
    // }

    const searchForm = (
      <form onSubmit={(event) => this.handleSubmit(event)} onReset={() => this.handleReset()}>
        <input type="text" placeholder="검색어를 입력해주세요." autoFocus value={this.state.searchKeyword} onChange={(event) => this.handleChangeInput(event)}></input>
        {/* {resetButton} */}
        {/* {this.state.searchKeyword.length > 0 ? <button type="reset" className="btn-reset"></button> : null} */}
        {this.state.searchKeyword.length > 0 && <button type="reset" className="btn-reset"></button>}
      </form>
    );

    const searchResult =
      this.state.searchResult.length > 0 ? (
        <ul className="result">
          {this.state.searchResult.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="empty-box">검색 결과가 없습니다.</div>
      );

    const keywordList = (
      <ul className="list">
        {this.state.keywordList.map(({ id, keyword }, index) => {
          return (
            <li key={id} onClick={() => this.search(keyword)}>
              <span className="number">{index + 1}</span>
              <span>{keyword}</span>
            </li>
          );
        })}
      </ul>
    );

    const historyList = (
      <ul className="list">
        {this.state.historyList.map(({ id, keyword, date }) => {
          return (
            <li key={id} onClick={() => this.search(keyword)}>
              <span>{keyword}</span>
              <span className="date">{formatRelativeDate(date)}</span>
              <button className="btn-remove" onClick={(event) => this.handleClickRemoveHistory(event, keyword)}></button>
            </li>
          );
        })}
      </ul>
    );

    const tabs = (
      <>
        <ul className="tabs">
          {Object.values(TabType).map((tabType) => {
            return (
              <li className={this.state.selectedTab === tabType ? "active" : ""} key={tabType} onClick={() => this.setState({ selectedTab: tabType })}>
                {TabLabel[tabType]}
              </li>
            );
          })}
        </ul>
        {this.state.selectedTab === TabType.KEYWORD && keywordList}
        {this.state.selectedTab === TabType.HISTORY && historyList}
      </>
    );

    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          {searchForm}
          <div className="content">{this.state.submitted ? searchResult : tabs}</div>
        </div>
      </>
    );
  }
}
// const element = (
//   //<div>
//   <>
//     <header>
//       <h2 className="container">검색</h2>
//     </header>
//     <div className="container">
//       <form>
//         <input type="text" placeholder="검색어를 입력해주세요." autoFocus></input>
//       </form>
//     </div>
//   </>
//   //</div>
// ); // 자바스크립트 엔진이 자동으로 세미콜론을 붙이는 것을 방지하기 위해 소괄호로 감싼다. -> JSX를 사용할 때 권장하는 방식이다.
//ReactDOM.render(element, document.querySelector("#app"));
ReactDOM.render(<App />, document.querySelector("#app"));
