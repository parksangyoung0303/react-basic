import React, { useEffect, useRef, useState } from 'react'

// Custom Hook:
// - react에서 hook 함수는 반드시 함수형 컴포넌트 코드 블럭 내에서 호출되어야 함
// - 함수명이 use로 시작하는 함수에서는 hook 함수를 사용할 수 있음
function useCustom() {
  const [state1, setState1] = useState<number>(0);
  const [state2, setState2] = useState<number>(0);

  const ref = useRef<number>(0);

  useEffect(() => {
    console.log('state1 변경');
  }, [state1]);
  
  useEffect(() => {
    console.log('state2 변경');
  }, [state2]);
  
  useEffect(() => {
    console.log('state1 또는 state2 변경');
  }, [state1, state2]);

  const onIncreateState1 = () => {
    setState1(state1 + 1);
  };

  const onIncreateState2 = () => {
    setState2(state2 + 1);
  };

  return {state1, onIncreateState1, state2, onIncreateState2};
}

export default function CustomHookComponent() {

  // const [state1, setState1] = useState<number>(0);
  // const [state2, setState2] = useState<number>(0);

  // const ref = useRef<number>(0);

  // useEffect(() => {
  //   console.log('state1 변경');
  // }, [state1]);
  
  // useEffect(() => {
  //   console.log('state2 변경');
  // }, [state2]);
  
  // useEffect(() => {
  //   console.log('state1 또는 state2 변경');
  // }, [state1, state2]);

  // const onIncreateState1 = () => {
  //   setState1(state1 + 1);
  // };

  // const onIncreateState2 = () => {
  //   setState2(state2 + 1);
  // };

  // - custom hook을 한 번 호출할 때마다 독립적으로 동작을 함
  const {state1, state2} = useCustom();
  const {onIncreateState1, onIncreateState2} = useCustom();

  return (
    <div>
      <div>
        <h3>{state1}</h3>
        <button onClick={onIncreateState1}>상태1 증가</button>
        <h3>{state2}</h3>
        <button onClick={onIncreateState2}>상태2 증가</button>
      </div>
      <SubComponent />
    </div>
  )
}

function SubComponent() {

  const {
    state1, onIncreateState1, 
    state2, onIncreateState2
  } = useCustom();

  return (
    <div style={{ backgroundColor: 'gray' }}>
      <h4>{state1}</h4>
      <button onClick={onIncreateState1}>상태1 증가</button>
      <h4>{state2}</h4>
      <button onClick={onIncreateState2}>상태2 증가</button>
    </div>
  )

}