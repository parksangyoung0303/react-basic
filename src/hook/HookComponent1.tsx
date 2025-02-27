import { useEffect, useState } from 'react'

// Hook 함수 : React에서 컴포넌트 생명주기 및 상태에 따라 특정 작업을 수행하도록 하는 특별한 함수
// - use로 시작하는 함수

// Hook 함수의 종류
// - useState : 컴포넌트의 상태 관리를 가능하게 해주는 함수(상태를 생성, 업데이트, 상태접근)
// - useEffect : 컴포넌트의 생명주기에 따라 특정 작업을 수행할 수 있도록 하는 함수 
//                (mount, update, unmount에 해당하는 생명주기에 따라 실행)
// - useRef : 특정 데이터를 기억하기 위한 함수 값이 변경되더라도 렌더링을 수행하고 싶지 않을 때, DOM 요소를 기억하고 싶을 때 사용 
// - useContext : 컴포넌트 트리 상에서 전역 상태를 공유하고자 할때 사용하는 함수
// - useReducer : 상태와 관련된 로직을 관리하는 함수
//                (상태 업데이트 함수를 컴포넌트 외부로 옮길 수 있도록 하여 코드 관리를 수월하게 도와줌)
// - useCallback : 메모리 상에서 함수를 재호출할 수 있도록 하는 함수 
//                (렌더링 혹은 이벤트 없이 특정 함수를 호출할 때)
// - useMemo : 메모리 내에 함수의 결과를 저장하여 함수 재호출하지 않고 결과를 사용할 수 있도록 하는 함수

// - hook 함수는 반드시 함수형 컴포넌트 코드 블럭 라인에 존재해야 함
// const [state, setState] = useState<number>(0);

export default function HookComponent1() {

    const [state, setState] = useState<number>(0);
    const [show, setShow] = useState<boolean>(false);

    const onIncreaseHandler = () => {
        setState(state + 1);
    }

    const onShowHandler = () => {
        setShow(!show);
    }
    
    // - hook 함수는 반드시 컴포넌트 코드 블럭 라인에 존재해야 함
    // const func = () => {
    //     const [state, setState] = useState<number>(0);
    // }

    // useEffect: 컴포넌트의 생명주기에 따라 특정 함수를 호출하는 훅 함수
    // - mount: 컴포넌트가 처음 화면에 등록되었을 때
    // - update: 컴포넌트 상태가 변경 혹은 지정되면서 렌더링 되었을 때
    // - unmount: 컴포넌트가 화면에서 제거되었을 때
    // - useEffect(호출할 콜백 함수, 스코프할 상태 배열);
    // 기억 !!! 개발 환경에서는 mount - unmount - mount 단계를 거침

    // mount 단계에서 특정 함수 호출
    // 스코프할 상태 배열에 빈 배열을 전달
    useEffect(() => {
        console.log('mount!');
    }, []);

    // 스코프할 상태 배열을 지정하지 않으면 렌더링될때 마다 실행됨
    // useEffect(()=> {
    //     console.log('두번째 매개변수를 전달하지 않은 effect');
    //     setState(state + 1);
    
    // update 단계에서 특정 함수 호출
    useEffect(() =>{
        console.log('state 값이 변경됨!');
        // 스코프할 상태 배열에 지정된 상태를 해당 effect 내에서 변경하면 무한 호출됨
        // setState(state + 1);
    },[state]);

    useEffect(()=> {
        console.log('state 혹은 show 상태가 변경됨!!');
    }, [state, show]);

  return (
    <div>
        <h1>{state}</h1>
        <button onClick={onIncreaseHandler}>+</button>

        <button onClick={onShowHandler}>보기</button>
        {show && <SubComponent />}
    </div>
  )
}

function SubComponent() {

    // unmount 단계에서만 특정 함수 호출
    // 콜백 함수의 반환 함수로 지정
    useEffect(()=> {
        console.log('Sub 컴포넌트 마운트!!');

        return () => {
            console.log('Sub 컴포넌트 언마운트!!!');
        };
    }, []);
    return (
        <h1 style={{color: 'red'}}>Sub Component!</h1>
    )
}
