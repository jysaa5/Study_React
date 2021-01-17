import React from 'react';
// import './Box.css';
//import Style from './Box.module.css';
import styled from 'styled-components';

// 요소들을 렌더링하고 있음.
// export default function Box({size}){
//     if(size==='big'){
//         return <div className="box big">큰 박스</div>;
//     }else{
//         return <div className="box small">작은 박스</div>;
//     }
// }

/* css-module */
// export default function Box({size}){
//     if(size==='big'){
//         return <div className={`${Style.box} ${Style.big}`}>큰 박스</div>;
//     }else{
//         return <div className={`${Style.box} ${Style.small}`}>작은 박스</div>;
//     }
// }

/* css-in-js */
// 컴포넌트 생성
const BoxCommon = styled.div`
height: 50px;
background-color: #aaaaaa;`;

// 위 컴포넌트를 확장
const BoxBig = styled(BoxCommon)`width: 200px;`;

const BoxSmall = styled(BoxCommon)`width: 100px`;

export default function Box({size}){
    if(size === 'big'){
        return <BoxBig>큰 박스</BoxBig>;
    }else{
        return <BoxSmall>작은 박스</BoxSmall>;
    }
}