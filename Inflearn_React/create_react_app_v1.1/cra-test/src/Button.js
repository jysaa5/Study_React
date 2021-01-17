import React from 'react';
// import './Button.css';
import Style from './Button.module.css';
import cn from 'classnames';
console.log({Style})

// export default function Button({size}){
//     if(size==='big'){
//         return <button className="button big">큰 버튼</button>;
//     }else{
//         return <button className="button small">작은 버튼</button>;
//     }
// }

// export default function Button({size}){
//     if(size=== 'big'){
//         return <button className={`${Style.button} ${Style.big}`}>큰 버튼</button>;
//     }else{
//         return (
//             <button className={`${Style.button} ${Style.small}`}>작은 버튼</button>
//         );
//     }
// }


export default function Button({size}){
    if(size=== 'big'){
        return <button className={cn(Style.Button, Style.big)}>큰 버튼</button>;
    }else{
        return (
            <button className={cn(Style.Button, Style.small)}>작은 버튼</button>
        );
    }
}