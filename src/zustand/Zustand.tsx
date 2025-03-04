import { useState } from 'react';
import { create } from 'zustand';

// zustand 패키지 : react에서 사용할 수 있는 상태 관리 패키지 중 하나 
// - 상태 관리 패키지 중 과거에는 Redux 패키지가 가장 많이 사용됐지만 현재는 zustand로 이동 중
// - Redux는 복잡한 코드 구조 및 높은 학습 곡선을 가지고 있음
// - zustand는 단순한 코드 구조의 낮은 학습 곡선을 가지고 있음
// - Redux, MobX와 같은 타 상태 관리 패키지에 비해 가벼움 -> 빌드 시 패키징 속도가 굉장히 빠름 / 번들의 크기가 줄어듬

// npm install zustand

// zustand를 이용한 전역 상태 선언 방법
// - zustand 패키지 내부의 create 함수로 store를 생성할 수 있음
// - store: 관리할 상태들과 각 상태의 변경 함수들의 집합
// - create 함수를 호출하면 store를 반환하는 hook 함수를 반환
// - TypeScript의 경우 create 함수에 store의 구조를 제너릭으로 전달해야함

interface Store {
    state1: number;
    setState1: (state1: number) => void;
    increaseState1: () => void;
}

// - create 함수의 매개변수로 set 함수 매개변수를 받는 콜백 함수를 전달해야함
// - set 함수: 상태(store)를 변경하기 위한 함수
// - create 함수로 전달한 콜백함수는 store 객체를 반환

const useStore = create<Store>((set) =>  ({
    state1: 0,
    // create 함수의 매개변수로 전달된 콜백 함수의 set 함수를 통해서 상태를 변경해야함
    // set 함수의 매개변수로는 현재 상태(store)를 받는 콜백함수를 전달
    // set 함수의 매개변수로 전달하는 콜백 함수는 변경된 상태(store) 객체를 반환 ()
    setState1: (state1: number) => set((state) => ({...state, state1})),
    increaseState1: () => set((state)=> ({ ...state, state1: state.state1 + 1 }))
}));

export default function Zustand() {
    // const [state1, setState1] = useState<number>(0);
    //   const onChangeHandler = () => {
    //     setState1(state1 + 1);
    //   };
    
      return (
        <div style={{ margin: '40px', padding: '40px', border: '1px solid gray' }}>
          <B />
          <C />
        </div>
      )

      
      function B() {
        
        const { state1 } = useStore();

        return (
          <div style={{ margin: '40px', padding: '40px', border: '1px solid gray' }}>
            <h1>{state1}</h1>
          </div>
        )
      
      }

      
      function C() {
        return (
          <div style={{ margin: '40px', padding: '40px', border: '1px solid gray' }}>
            <D />
            <E />
          </div>
        )
      }
      
      
      function D() {

    const { increaseState1 } = useStore();

    const onChange = () => {
        increaseState1();
    }
      
        return (
          <div style={{ margin: '40px', padding: '40px', border: '1px solid gray' }}>
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
}
