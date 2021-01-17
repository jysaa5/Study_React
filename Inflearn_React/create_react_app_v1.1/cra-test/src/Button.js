import React from 'react';
// import './Button.css';
import Style from './Button.module.css';
import cn from 'classnames';
import styled from 'styled-components';
console.log({Style})

/* 일반적인 CSS */
// export default function Button({size}){
//     if(size==='big'){
//         return <button className="button big">큰 버튼</button>;
//     }else{
//         return <button className="button small">작은 버튼</button>;
//     }
// }


/* css-module */
// export default function Button({size}){
//     if(size=== 'big'){
//         return <button className={`${Style.button} ${Style.big}`}>큰 버튼</button>;
//     }else{
//         return (
//             <button className={`${Style.button} ${Style.small}`}>작은 버튼</button>
//         );
//     }
// }


/* classnames 사용 */
// export default function Button({size}){
//     if(size=== 'big'){
//         return <button className={cn(Style.Button, Style.big)}>큰 버튼</button>;
//     }else{
//         return (
//             <button className={cn(Style.Button, Style.small)}>작은 버튼</button>
//         );
//     }
// }

/* classnames 사용 */
// export default function Button({size}){
//     const isBig = size === 'big';
//         return <button className={cn(Style.Button, {[Style.big]:isBig, [Style.small]: !isBig})}>{isBig? '큰 버튼': '작은 버튼'}</button>;
// }


/* css-in-js */
//  아래 속성값을 받아서 동적으로 처리 가능
const BoxCommon = styled.button`
width: ${props => (props.isBig ? 100: 50)}px;
height: 30px;
background-color: red;`

export default function Box({size}){
    const isBig = size === 'big';
    const label = isBig? '큰 버튼': '작은 버튼';
    return <BoxCommon isBig={isBig}>{label}</BoxCommon>;
}