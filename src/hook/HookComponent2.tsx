import React, { useRef, useState, KeyboardEvent } from 'react'

export default function HookComponent2() {

    // useRef: 
    // - 렌더링 작업 없이 값을 기억하고 변경하고자 할 때 사용하는 훅
    // - DOM 요소를 참조하기 위해 자주 사용
    // - const 변수 = useRef<타입>(초기값);
    // - useRef 생성한 참조 변수의 데이터는 해당 변수의 current 속성에 들어있음

    let number = 0;
    const [state,setState] = useState<number>(0);
    const ref = useRef<number>(0);

    // HTML DOM 요소를 참조하기 위해 useRef를 사용할 수 있음
    // 이땐, 해당 요소 시작태그의 ref 속성의 해당 참조 변수를 지정해야함
    const secondRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        setState(state + 1);
    };
    
    const onVar = () => {
        number++;
        console.log(number);
    };

    const onRef = () => {
        ref.current++;
        console.log(ref.current);
    };

    const onFirstKeydownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        const {key} = event;
        if (key !== 'Enter') return;

        // React에서는 document.getElementXXX 사용을 지양함
        // - 실제 HTML이 render 되기전에 코드를 읽는다면 요소를 찾을 수 없음

        // const secondInputElement = document.getElementById('second-input');
        // if (secondInputElement){
        // secondInputElement?.focus()};

        // 특정 객체에서 속성 혹은 함수 호출을 실행하고자 할때 해당 객체가 null 혹은 undefined를 가질수 있는 경우라면
        // 해당 객체에 ?연산자를 사용하여 존재할 때만 접근 및 호출할 수 있도록 함
        // 사용 지양 -> 상단에서 검증(if문 이용)을 먼저 하는 것을 권장
        secondRef.current?.focus(); 
    };


  return (
    <div>
        <h1>일반 변수: {number}</h1>
        <h1>상태 변수: {state}</h1>
        <h1>참조 변수: {ref.current}</h1>
        <button onClick={onVar}>일반증가!</button>
        <button onClick={onClick}>클릭!</button>
        <button onClick={onRef}>Ref 증가!</button>

        <div style={{margin: '40px', padding: '40px', border: '1px solid gray'}}>
            <input id='first-input' onKeyDown={onFirstKeydownHandler} />
            <input ref={secondRef} id='second-input' />
            <button>버튼</button>
        </div>
    </div>
  )
}
