import React from 'react'

// 조건부 렌더링 : 상황이나 조건에 따라서 다르게 렌더링하는 방법
// - if, &&, ? 를 사용하는 방법이 존재

interface Prop {
    number: number;
}

// if문을 이용한 조건부 반환
// - 조건에 따라서 다른 return을 주는 방법

function IfComponent( {number}: Prop) {

    // number값이 양수면 글자를 파란색으로하여 "양수"
    // number값이 음수면 글자를 빨간색으로하여 "음수"
    // number값이 0이면 글자를 검은색으로하여 "영"

    if (number > 0) {
        return (
            <h1 style={{color: 'blue'}}>양수</h1>
        )
    }
    if (number < 0) {
        return (
            <h1 style={{color: 'red'}}>음수</h1>
        )
    }
    return (
        <h1 style={{ color:'black' }}>영</h1>
    )
};

// 삼항 연산자 (? : )를 이용한 조건부 렌더링
// - return 내부에서 조건에 따라 렌더링하고자 할 때 사용
function ThreeComponent({number}: Prop) {

    // number값이 양수면 글자를 파란색으로하여 "양수"
    // number값이 음수면 글자를 빨간색으로하여 "음수"
    // number값이 0이면 글자를 검은색으로하여 "영"
//     return (
//         <h1 style={{color: number > 0 ? 'blue' : number < 0 ? 'red' : 'black'}}>
//             {number > 0 ? '양수' : number < 0 ? '음수' : '영'}
//          </h1>)
    return (
        <div style={{border: '1px solid gray', margin: '12px'}}>
            {
            number > 0 ? <h1>양수</h1> :
            number < 0 ? <h2>음수</h2> :
            <h3>영</h3>
            }
        </div>
    )
}

// 논리 연산자를 이용한 조건부 렌더링
// - return 내부에서 조건에 따라 렌더링하고자 할 때 사용 (보여줄지 말지)
function LogicComponent({number}: Prop) {

    // 짝수면 해당 값은 짝수입니다. 라는 h2요소를 렌더링하게 함

    return (
        <div style={{border: '1px solid gray', margin: '12px'}}>
            <h1>입력받은 숫자: {number}</h1>
            {number % 2 === 0 && <h2>해당 값은 짝수입니다.</h2> }
           
        </div>
    )

}

export default function ConditionRender() {
  return (
    <div>
        <IfComponent number={1} />
        <IfComponent number={-1} />
        <IfComponent number={0} />

        <ThreeComponent number={1} />
        <ThreeComponent number={-1} />
        <ThreeComponent number={0} />

        <LogicComponent number={2} />
    </div>
  )
}
