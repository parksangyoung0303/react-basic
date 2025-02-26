import React, { ChangeEvent, useState,KeyboardEvent } from 'react'

// 상태(State) : 각 컴포넌트가 독립적으로 가지고 있는 데이터 기억 공간
// - 상태는 컴포넌트가 렌더링되는 기준이 됨, 상태가 변경되면 컴포넌트는 리렌더링 됨

// hook - 컴포넌트의 생명주기에 연관이있음, hook이 등장하면서 class함수를 안쓰게되었음

export default function StateComponent() {

    let letCount: number = 0;

    // state 선언 방법
    // - useState hook 함수로 상태를 선언
    // const [상태변수, 상태변경함수] = useState<상태변수타입>(초기값);
    const [count, setCount] = useState<number>(0);
    let [num, setNumber] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    const [array, setArray] = useState<number[]>([]);

    const [comment, setComment] = useState<string>('');
    
    const onClickHandler = () => {
      letCount++;
      console.log(letCount);
      setCount(count + 1);
      console.log(count);

      // 상태 변수는 반드시 상태변경 함수를 이용해서 변경해야 변경값이 적용됨
      // 직접 바꾸게 되면 일반 변수와 동일한 취급을 함
      num++;
      console.log(num);
      console.log('-------------------');
    }
    
    const onStateClickHandler = () => {
      // 상태변경함수를 사용하여 상태를 변경하더라도 바로 변경되지 않음
      // 함수가 끝나고 렌더링되는 시점에 적용됨
      // console.log(count);
      // setCount(count + 1);
      // console.log(count);
      // setCount(count + 1);
      // console.log(count);
      // setCount(count + 1);
      // console.log(count);
      // console.log('----------');

      // let nextCount = count + 1;
      // setCount(nextCount);
      // nextCount += 1;
      // setCount(nextCount);
      // nextCount += 1;
      // setCount(nextCount);

      // 상태변경 함수에 콜백 함수를 전달하면 해당 콜백 함수를 누적 시켜서 실행
      setCount((prevCount)=> prevCount + 1);
      setCount((prevCount)=> prevCount + 1);
      setCount((prevCount)=> prevCount + 1);
    };
    
    const onSumHandler = () => {
      // setCount(count + 1);
      // setTotal(total + count);
    
    const nextCount = count + 1;
    setCount(nextCount);
    const nextTotal = total + nextCount;
    setTotal(nextTotal);
    };

    const onArrayAddHandler = () => {
      // const nextCount = count + 1;
      // setCount(nextCount);
      const newArray = [...array, 1];
      array.push(1);
      setArray(newArray);
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setComment(value);
    };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    const {key}  = event;
    if (key !== 'Enter') return;
    onSubmitHandler();
  };

  const onSubmitHandler = () =>  {
      alert('전송!');
  };

  return (
    <div>
      <h2>일반변수 : {letCount}</h2>
      <h2>상태변수 : {count}</h2>
      <h2>let 상태변수 : {num}</h2>
      <h2>total : {total}</h2>
      <button onClick={onClickHandler}>증가</button>
      <button onClick={onStateClickHandler}>버튼</button>
      <button onClick={onSumHandler}>더하기</button>
      <div>
        {array.join(', ')} / 길이 : {array.length}
        <button onClick={onArrayAddHandler}>추가</button>
      </div>
      <p>{comment}</p>
      <input value={comment} onChange={onChangeHandler} />

      <div style={{margin: '40px', border: '1px solid gray', padding: '40px'}}>
        <input value={comment} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} />
        <button onClick={onSubmitHandler}>전송</button>
      </div>
    </div>
  )
}
