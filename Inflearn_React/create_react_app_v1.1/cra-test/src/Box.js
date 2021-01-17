import React from 'react';
// import './Box.css';
import Style from './Box.module.css';

// 요소들을 렌더링하고 있음.
// export default function Box({size}){
//     if(size==='big'){
//         return <div className="box big">큰 박스</div>;
//     }else{
//         return <div className="box small">작은 박스</div>;
//     }
// }


export default function Box({size}){
    if(size==='big'){
        return <div className={`${Style.box} ${Style.big}`}>큰 박스</div>;
    }else{
        return <div className={`${Style.box} ${Style.small}`}>작은 박스</div>;
    }
}