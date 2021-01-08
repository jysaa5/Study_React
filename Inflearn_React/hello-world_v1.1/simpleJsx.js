function LikeButton() {
  // React 변수: react.development.js 파일이 실행될 때 전역변수로 노출됨.
  // useState 함수: 컴포넌트의 상태값을 추가할 때 사용.
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, " ", text, " "); // createElement 함수: 리액트 요소 반환
  // 리액트 요소: 리액트에서는 UI를 표현하는 가장 작은 단위
  // buttons 처럼 문자열을 넣으면 html에 해당하는 태그가 만들어짐.
  // 두 번째 매개변수: 속성값
  // 세 번째 매개변수 이후: children
  // return React.createElement(
  //     'button', {
  //         onClick: () => setLiked(!liked)
  //     },
  //     text,
  // );
} // Container 컴포넌트


function Container() {
  // count: 상태값 추가
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, " \uD604\uC7AC \uCE74\uC6B4\uD2B8: "), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 10,
      color: 'red'
    }
  }, " ", count, " "), " ", /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, " \uC99D\uAC00 "), " ", /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, " \uAC10\uC18C "), " "), " "); // return React.createElement(
  //     // div 열기
  //     'div',
  //     null,
  //     // LikeButton 랜더링
  //     React.createElement(LikeButton),
  //     React.createElement(
  //         // div 열기
  //         'div', {
  //             style: {
  //                 marginTop: 20
  //             }
  //         },
  //         React.createElement('span', null, '현재 카운트:'),
  //         React.createElement('span', {
  //             style: {
  //                 marginRight: 10
  //             }
  //         }, count),
  //         // 버튼 2개 추가
  //         React.createElement(
  //             'button', {
  //                 onClick: () => setCount(count + 1)
  //             },
  //             '증가',
  //         ),
  //         React.createElement(
  //             'button', {
  //                 onClick: () => setCount(count - 1)
  //             },
  //             '감소',
  //         ),
  //     ),
  // );
} // div 안에 랜더링 작업


const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer);