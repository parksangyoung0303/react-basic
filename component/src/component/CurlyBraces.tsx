import React from 'react'

export default function CurlyBraces() {
    // Curly Braces: 
    // - JSX에서 자바스크립트 표현식을 작성할 때 사용하는 방법
    // - JSX안에 { } 로 영역을 지정항 그 안에 자바스크립트 표현식을 작성

    const title = 'Curly Braces';

    const array = ['apple', 'banana', 'cacao'];
    const object = { name: '이성계', ho: '태조'};

    const inputProp = {
      type: 'text',
      placeholder: '리엑트 컴포넌트',
      readOnly: false
    }

    // 1. 요소의 컨텐츠에 자바스크립트의 표현식 결과를 사용하고자 할때
    // 2. 주석 처리 - JSX에서는 HTML 주석을 사용할 수 없기 때문에 JS주석을 사용해야함
    // 3. 속성의 값을 지정할 때
    //      - JSX에서 인라인 스타일은 문자열X, 객체로 표현
    // ? 4. 배열은 각요소를 나열하면서 렌더링이 되지만, 객체는 직접 렌더링 시킬 수 없음
    // 5. 선언문, 제어문을 사용할 수 없음
    // 6. 스프레드 연산자로 객체를 속성에 바로 지정 가능

  return (
    <>
    <h1 style={{backgroundColor: 'black', color: 'white'}}>제목 : {title}</h1>
    <div>{1 + 2}</div>

    <table>
        <tr>
            <td rowSpan={2}></td>
        </tr>
    </table>
    <div>{array}</div>
    <div>{object.name}</div>
    <div>{object.ho}</div>
    <input type={inputProp.type} placeholder={inputProp.placeholder} readOnly={inputProp.readOnly} /> 
    <input {...inputProp} />
    </>
  )
}
