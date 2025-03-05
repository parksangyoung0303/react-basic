import React from 'react';
import Component, { ClassComponent, FunctionalComponent } from './component/Component'
import './App.css';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component-manage/Properties';
import Gallery from './component-manage/example/Example1';
import Profile from './component-manage/example/Example2';
import ConditionRender from './component-manage/ConditionRender';
import ListRender from './component-manage/ListRender';
import EventComponent from './interaction/EventComponent';
import StateComponent from './interaction/StateComponent';
import ForwardingComponent from './interaction/ForwardingComponent';
import HookComponent1 from './hook/HookComponent1';
import HookComponent2 from './hook/HookComponent2';
import CustomHookComponent from './hook/CustomHookComponent';
import { Outlet, Route, Routes, useLocation } from 'react-router';
import PathMove from './router/PathMove';
import QueryString from './router/QueryString';
import PathVariable from './router/PathVariable';
import Zustand from './zustand/Zustand';
import Storage from './storage/Storage';
import Cookie from './storage/Cookie';
import Axios from './axios/Axios';


// react-router 패키지:
// - React의 SPA(Single Page Application)에서 라우팅을 구현하기 위한 라이브러리
// - 웹 페이지에서 다양한 경로에 따른 뷰를 관리할 수 있도록 도움을 줌
// - 웹 애플리케이션 내에서 URL 이동이 있을 때 서버에 요청을 새로 보내지 않음
// - 웹 애플리케이션 내에서 네비게이션 역할을 수행

// npm install react-router

// root 경로에 있는 index.tsx의 root.render() 안의 <App /> 컴포넌트를 <BrowserRouter> 컴포넌트로 감싸야함
// <BrowserRouter>: URL을 사용하여 브라우저 주소 표시줄에 현재 위치를 저장하고 탐색할 수 있도록 하는 컴포넌트

// <Routes> : <Route> 컴포넌트로 URL에 따른 컴포넌트를 렌더링 할 수 있도록 하는 컴포넌트
// <Route> : URL 패턴에 따라서 렌더링하고자 하는 컴포넌트를 지정하는 컴포넌트
// - path 속성 : URL 패턴 지정
// - element 속성 : 렌더링할 컴포넌트를 지정
// - index 속성 : 현재 경로의 기본 라우터로 지정
function InteractionLayout() {

  // useLocation :
  // - 현재 경로에 대한 객체를 반환하는 react-router의 훅 함수
  // - pathname 속성 : 현재 path를 가지고 있는 속성
  const { pathname } = useLocation();

  // <Outlet> : 부모 <Route>에 해당 컴포넌트가 element로 등록되었을 때
  //            자식 <Route>의 element가 해당 위치에 렌더링 되도록하는 컴포넌트
  return (
    <div>
      <div style={{ backgroundColor: 'blue', height: '150px' }}>상호작용 {pathname}</div>
      <Outlet />
      <div style={{ backgroundColor: 'red', height: '150px' }}>푸터</div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route index element={<h1>기본 페이지</h1>} />
      <Route path={'/class'} element={<ClassComponent />} />
      <Route path={'/function'} element={<FunctionalComponent />} />

      <Route path={'/interaction'} element={<InteractionLayout />}>
        <Route index element={<StateComponent />} />
        <Route path={'event-component'} element={<EventComponent />} />
        <Route path={'forwarding-component'} element={<ForwardingComponent />} />
      </Route>

      <Route path={'/router'}>
        <Route path={'path-move'} element={<PathMove />} />
        <Route path={'query-string'} element={<QueryString />} />
        <Route path={'path-variable/:name'} element={<PathVariable />} />
      </Route>

      <Route path={'/zustand'} element={<Zustand/>}></Route>

      <Route path={'/storage'}>
        <Route index element={<Storage />}/>
        <Route path={'cookie'} element={<Cookie />} />
      </Route>

      <Route path={'axios'} element={<Axios />} />

      <Route path={'*'} element={<h1>404!</h1>} />
      
    </Routes>
  );
}

export default App;
