function LikeButton() {
    // React 변수: react.development.js 파일이 실행될 때 전역변수로 노출됨.
    // useState 함수: 컴포넌트의 상태값을 추가할 때 사용.
    const [liked, setLiked] = React.useState(false);
    const text = liked ? '좋아요 취소' : '좋아요';

    // createElement 함수: 리액트 요소 반환
    // 리액트 요소: 리액트에서는 UI를 표현하는 가장 작은 단위
    // buttons 처럼 문자열을 넣으면 html에 해당하는 태그가 만들어짐.
    // 두 번째 매개변수: 속성값
    // 세 번째 매개변수 이후: children
    return React.createElement(
        'button', {
            onClick: () => setLiked(!liked)
        },
        text,
    );
}

// div 안에 랜더링 작업
// const domContainer = document.getElementById('root');
// ReactDOM.render(React.createElement(LikeButton), domContainer);

// const domContainer1 = document.getElementById('root1');
// ReactDOM.render(React.createElement(LikeButton), domContainer1);
// const domContainer2 = document.getElementById('root2');
// ReactDOM.render(React.createElement(LikeButton), domContainer2);
// const domContainer3 = document.getElementById('root3');
// ReactDOM.render(React.createElement(LikeButton), domContainer3);


const domContainer = document.getElementById('root');
ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(LikeButton),
        React.createElement(LikeButton),
        React.createElement(LikeButton),
    ),
    domContainer,
);

// <div><p>hello</p><p>world</p></div>
// React.createElement(
//     'div',
//     null,
//     React.createElement('p', null, 'hello'),
//     React.createElement('p', null, 'world')
// );