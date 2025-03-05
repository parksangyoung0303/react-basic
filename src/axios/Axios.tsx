import axios from 'axios'
import React, { ChangeEvent, useState } from 'react'

// axios 패키지: 
// - JavaScript에서 사용하는 HTTP 클라이언트 라이브러리
// - Node.js 환경과 브라우저 환경에서 모두 동작
// - Fetch API, AJAX 보다 간편함
// - axios는 기본적으로 비동기 처리를 수행함

// npm install axios
export default function Axios() {

    const [responseBody, setResponseBody] = useState<string>('');

    const [name, setName] = useState<string>('');
    const [ho, setHo] = useState<string>('');
    const [age, setAge] = useState<string>('');

    const onNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setName(value);
    }

    const onHoChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setHo(value);
    }

    const onAgeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        const regexp = /^\d+$/;
        if (regexp.test(value) || value === '') setAge(value);
    }

    // axios 객체
    // - http method에 해당하는 메서드를 포함하고 있음
    // - 각각의 http method 메서드는 매개변수로 URL, requestBody, option을 받을 수 있음
    // - get, delete: URL, option[선택사항]
    // - post,patch, put: URL, requestBody[선택사항], option[선택사항]

    const onBasicGet = () => {
        axios.get('http://127.0.0.1:8080/basic')
            // 각각의 http method 메서드에 then으로 response 객체를 받는 콜백 함수를 전달
            // then은 request에 대해서 성공인 경우 수행
            // then은 response의 http 상태코드 100 ~ 300를 처리
            .then((reponse)=>{
                console.log(reponse.data);
            })
            // catch로 오류 객체를 매개변수로 받는 콜백 함수를 전달
            // 응답이 존재하는 경우 http 상태코드 400 ~ 500을 처리
            // 응답이 존재하지 않는 경우도 처리
            .catch((error)=>{
                // 응답이 존재할 경우 error 객체의 response 객체를 사용할 수 있음
                console.log(error.response.data);
                // 응답이 존재하지 않는 경우 response 속성이 undefined
            });
    };

    const onQueryStringClickHandler = () => {
        // axios는 query string parameter를 option으로 보낼 수 있음
        axios.get('http://127.0.0.1:8080/request-data/request-param',
        {
            params: { 'name' : name, 'age' : age }
        }).then((response)=> {
            const responseBody = response.data;
            setResponseBody(responseBody);
        }).catch((error)=>{
            console.log(error);
        })
    };

    const onRequestBodyClickHandler = () => {
        // axios의 post, patch, put 요청에 두 번째 매개변수로 requestBody를 지정 할 수 있음
        // 객체 타입이어야함
        // ! post, patch, put 메서드의 두 번쨰 매개변수는 반드시 requestBody임
        // ! request body 없이 옵션만 지정 하더라도 request body에는 빈 객체가 있어야힘
        axios.post('http://127.0.0.1:8080/request-data/request-body',
            {name, age}
        ).then((response)=> {
            const responseBody = response.data;
            setResponseBody(responseBody);
        }).catch((error)=>{
            console.log(error);
        })
    }

  return (
    <div>
        <button onClick={onBasicGet}>Basic Get 요청 보내기</button>
        <div>
            <input value={name} placeholder={'name'} onChange={onNameChangeHandler} />
            <input value={ho} placeholder={'ho'} onChange={onHoChangeHandler} />
            <input value={age} placeholder={'age'} onChange={onAgeChangeHandler} />
            <button onClick={onQueryStringClickHandler} >Query String</button>
            <button onClick={onRequestBodyClickHandler} >Request Body</button>
            <h3>결과 : {responseBody}</h3>
        </div>
    </div>
  )
}

