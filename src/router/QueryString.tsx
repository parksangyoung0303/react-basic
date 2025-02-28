import React from 'react'
import { useLocation, useSearchParams } from 'react-router'

export default function QueryString() {

  // useLocation()로 반환되는 location 객체에 search 속성 값으로 query string을 구할 수 있음
  // search 속성은 query가 문자열로 받기 때문에 사용성이 떨어짐
  // const { search } = useLocation();

  // useSearchParams() :
  // - URL에서 Query String 값을 받을 수 있도록 하는 react-router 훅 함수
  // - 반환 : [getQueryString, setQueryString]
  const [queryParams] = useSearchParams();
  const name = queryParams.get('name');
  const age = queryParams.get('age');

  return (
    <div>
      이름 : {name} / 나이 : {age}
    </div>
  )
}