import React from "react";
// JSX / TSX : 
// JSX (JavaScript XML), TSX (TypeScript XML)
// XML의 형태와 유사 DOM 트리를 생성 JS,TS 확장자

// 컴포넌트 : 화면에 표시되는 하나의 단위 요소, 각각의 독립적인 상태와 로직을 가지고 있음
// 클래스형 컴포넌트, 함수형 컴포넌트가 존재
// 클래스형 컴포넌트는 최근엔 사용하지 않음

// 컴포넌트 선언 방법
// 1. class 컴포넌트
// - 클래스 키워드로 컴포넌트 작성
// - React 패키지의 Component 클래스를 상속하여 구현
// - render() 메서드의 반환값으로 렌더링하고자하는 요소를 반환
// - 하나의 컴포넌트를 클래스의 인스턴스로 관리

// ! 클래스형 컴포넌트를 더 이상 사용하지 않는 이유
// - 1. React 16.8 version부터 Hook 이라는 함수로 컴포넌트 생명주기를 
// - 다룰 수 있게 되면서 클래스를 복잡하게 생명주기를 다룰 필요가 없어짐
// - 2. 함수형 컴포넌트에 비해서 코드가 복잡함, 가독성, 코드 간결성의 문제로 사용하지 않음
// - 3. js의 this 키워드의 바인딩 문제로 적절한 결과를 나타내지 못하는 경우가 발생함
export class ClassComponent extends React.Component {
    render() {
        return (
            <h1>클래스형 컴포넌트</h1>
        )
    }
}


// function 컴포넌트 : 함수로 컴포넌트를 작성, 함수의 반환값으로 렌더링하고자하는 요소를 반환
// ! 주의 - 첫글자를 반드시 대문자로 작성하는 UpperCamelCase를 사용해야 컴포넌트로 인식

export function FunctionalComponent() {
    return (
        <h1>함수형 컴포넌트</h1>
    )
}

// VSCode의 ES 7 + React/Redux/React-native snippets 확장 설치후
// 단축 명령으로 React에 사용되는 코드를 작성할 수 있음

// 클래스형 컴포넌트 : rcc 단축 명령어로 생성
// 클래스 이름 = 파일의 이름과 동일하게 작성됨

// import React, { Component } from 'react'

// export default class Component extends Component {
//   render() {
//     return (
//       <div>Component</div>
//     )
//   }
// }


// 함수형 컴포넌트 : rfc 단축 명령으로 생성 가능
// 함수명 = 파일명과 동일하게 작성됨

// import React from 'react'

// export default function Component() {
//   return (
//     <div>Component</div>
//   )
// }

export default function Component() {

    // 함수형 컴포넌트의 return
    // - 함수형 컴포넌트의 return은 해당 컴포넌트가 렌더링할 요소를 반환
    // - HTML 처럼 보이지만 HTML이 아님
    // - 여러가지 자바스크립트 *연산자*를 사용할 수 있음

    // - 반드시 하나의 요소만 반환 가능 (0개 x, 2개 이상 x) only one !
    // - 만약 다수의 요소를 반환하고 싶다면 최상단에 부모 요소로 묶어줘야함
    // - <> </>를 이용하여 부모 요소로 사용하면 자식을 묶는 용도로 사용할 수 있음
    // - 반드시 return 바로 뒤에 반환값이 위치해야함

    // JSX(TSX)의 규칙
    // 1. 반드시 하나의 요소를 반환
    // 2. 모든 태그를 닫아야함
    // 3. 속성들을 JSX로 지정된 이름만 사용 가능 (lowerCamelCase)
    // 4. 주석을 사용할 땐 {자바스크립트 주석}을 사용

  return (
  <div>
    {/* <input className="" /> */}
    <h1>에이치원</h1>
    <h2>에이치투</h2>
  </div>)
}