import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router'

export default function PathMove() {

  const [state, setState] = useState<string>('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setState(value);
  };

  // - HTML의 a 요소로 경로 이동을 하게되면 요청을 새로 보내게 됨
  // - React에서는 요청을 새로 보내게 되면 각 컴포넌트가 유지하던 상태가 소멸함
  // - HTML의 a 요소를 사용하는 경우는 프로젝트 내부 이동이 아니라 외부로 이동하고자 할때만 사용

  // <Link>
  // - 현재 웹 애플리케이션 내에서 URL만 변경할 수 있도록 하는 컴포넌트
  // - <Link> 컴포넌트는 새로운 요청을 보내지 않음

  // useNavigate() :
  // - navigator 함수를 반환하는 react-router 훅 함수
  // - navigator 함수 : 새로운 요청없이 URL만 변경할 수 있도록 하는 함수
  const navigator = useNavigate();

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // for (let index = 0; index <= 1000000; index++) {
    //   console.log(index + ' 실행중 ....');
    // }

    event.preventDefault();
    if (!state) return;

    // window 객체의 location 객체의 href 속성 값을 변경하여 경로를 이동하면 요청을 새로 보냄
    // 현재 웹 애플리케이션의 상태를 유지할 수 없음
    // window.location.href = 'http://127.0.0.1:3000/class';

    navigator('/class');
  }

  return (
    <div>
      <a href='http://127.0.0.1:3000/class'>a 요소 - class 페이지로!</a>
      <br/>
      <input value={state} onChange={onChange} />
      <Link to='/class' onClick={onClick}>링크 컴포넌트 - class 페이지로!</Link>
    </div>
  )
}