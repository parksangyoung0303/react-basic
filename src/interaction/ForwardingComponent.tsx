import React, { useState } from 'react';

// 자식 컴포넌트로 상태 전달:
// - 속성을 통해 부모 요소의 상태를 자식 요소로 전달할 수 있음
// - 문제점: 자식 컴포넌트에서 상태를 변경하면 부모 컴포넌트가 리렌더링 됨
// - 부모 컴포넌트가 리렌더링 되면서 해당 상태를 사용하지 않는 자식 컴포넌트까지 리렌더링 됨
// - 사용하지 않는 속성을 자식 컴포넌트에 넘겨주기 받아오기 때문에 코드 복잡성이 증가
// - 이 문제를 해결하기 위해 글로벌 상태로 관리하는 방법이 파생됨
// - 글로벌 상태 관리 방법 context, Redux, zustand라는 기법이 존재

export default function ForwardingComponent() {

  const [state1, setState1] = useState<number>(0);

  const onChangeHandler = () => {
    setState1(state1 + 1);
  };

  return (
    <div style={{ margin: '40px', padding: '40px', border: '1px solid gray' }}>
      <B state1={state1} />
      <C state1={state1} onChange={onChangeHandler} />
    </div>
  )
}

interface BProp {
  state1: number;
}

function B({ state1 }: BProp) {

  return (
    <div style={{ margin: '40px', padding: '40px', border: '1px solid gray' }}>
      <h1>{state1}</h1>
    </div>
  )

}

interface CProp {
  state1: number;
  onChange: () => void;
}

function C(prop: CProp) {
  return (
    <div style={{ margin: '40px', padding: '40px', border: '1px solid gray' }}>
      <D {...prop} />
      <E />
    </div>
  )
}

interface DProp {
  state1: number;
  onChange: () => void;
}

function D({ state1, onChange }: DProp) {

  return (
    <div style={{ margin: '40px', padding: '40px', border: '1px solid gray' }}>
      <h1>{state1}</h1>
      <button onClick={onChange}>증가</button>
    </div>
  )
}

function E() {
  return (
    <div style={{ margin: '40px', padding: '40px', border: '1px solid gray' }}>
      <h1>E 컴포넌트</h1>
    </div>
  )
}