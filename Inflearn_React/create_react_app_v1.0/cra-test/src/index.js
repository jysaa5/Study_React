import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// IE에서 padStart 지원하기 위헤서 import 함.
import 'core-js/features/string/pad-start';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// process.env {변수 이름}
// process.env.NODE_ENV
// ``npm start``로 실행하면 development 값을 갖게됨.
// ``npm test``로 실행하면 test 값을 갖게 됨.
// ``npm run build``로 실행하면 production 값을 갖게 됨.
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL);
console.log('process.env.REACT_APP_TEMP1', process.env.REACT_APP_TEMP1);

// REACT_APP_* 는 이렇게 시작을 해야함.
// REACT_APP_API_URL=api.myapp.com npm start (MAC 버전)
// set "REACT_APP_API_URL=api.myapp.com"&&npm start (Windows 버전)