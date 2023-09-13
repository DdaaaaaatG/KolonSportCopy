import './styles/reset.css'
import './styles/App.css';
import './styles/Header.css';
import './styles/Footer.css';
import './styles/Responsive.css';
import { Routes, Route, Link,useNavigate,Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import ProductAllpage from "./pages/ProductAllpage";
import ProducDetailtpage from "./pages/ProducDetailtpage"; 
import ProductBox from './components/ProductBox';
import Login from './pages/Login';
import User from './pages/User';
import Private from './route/Private.js';
/*
유저스토리
1. 헤더, 푸터 html, css 작성 미디어쿼리작성
2. Detailpage를 누르면 전체 상품이 나온다
3. 상단: 상품개수, 높은금액, 낮은금액, 할인률, 신상품 버튼이 있어서 
클릭하면 해당 데이터만 나온다 
4. 5단으로로 배열됨 780이하는 2단으로 보여짐 

-상품 클릭시 디테일 페이지
-디테일 눌렀으나 로그인이 안되어있다면 로그인 페이지가 먼저나옴
-로그인이 되어 있으면 상품 상세페이지를 볼 수 있음
-상품 검색 가능
*/

/*
터미널 열어서 
1. npm install react-router-dom@6 입력해서 설치합니다.
2.셋팅은 index.js 파일로 가서 
<BrowserRouter>
  <App />
</BrowserRouter>
3. 
1. 우선 상단에서 여러가지 컴포넌트를 import 해오고 
2. <Routes> 만들고 그 안에 <Route>를 작성합니다.
3. <Route path="/url경로" element={ <보여줄html> } /> 이렇게 작성하면 됩니다. 

*/
function App() {
  const [authenticate, SetAuthenticate] = useState(false);
  // const Private = ()=>{
  //   return authenticate == true ? <User/>:<Navigate to='/pages/Login'/>; //로그인 한 생태면 user. 아니면 로그인 페이지
  // }
  useEffect(()=>{
    console.log('인증', authenticate);
  },[authenticate])
  return (
    <div>
      <Header authenticate={authenticate} SetAuthenticate={SetAuthenticate}/>
      <Routes>
        <Route  path="/" element={<ProductAllpage/>}></Route>
        <Route  path="/pages/Aboutpage" element={<Aboutpage/>}></Route>
        <Route  path="/pages/ProductAllpage" element={<ProductAllpage/>}></Route>
        <Route  path="/pages/ProducDetailtpage/:id" element={<Private authenticate={authenticate}/>}></Route>
        <Route path='/pages/Login' element={<Login SetAuthenticate={SetAuthenticate}/>}></Route>
        <Route path='/pages/user' element={<Private authenticate={authenticate}/>}></Route>
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;

/* restful routes란
https://velog.io/@janghoon333/Restful-API
url 디자인패턴임
HTTP Method 혹은 HTTP verb 라고 하는 URL로 통신하는 방법
"Representational State Trasfer" 의 약자로, 자원을 이름(자원의 표현)으로 구분해 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미한다.
-> 자원(resource)의 표현(representation)에 의한 상태 전달
  Method(
  POST 우리가 지금까지 fetch 해서 데이터 가져올 때 항상씀
  GET 새로운데이터 생성, 
  PUT 기존에 있는데이터를 수정 할때
  DELETE 데이터를 삭제할 때
  네가지 방식으로 url 이 만들어지는데 
  
  https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch
  :콜론이 있다는 것은 파라미터다 라는 것
  :뒤에 오는 내용은 가변적
  파라미터란? 
  컴퓨터 프로그래밍에서 매개변수(parameter 파라미터)란 변수의 특별한 한 종류로서, 함수 등과 같은 서브루틴의 인풋으로 제공되는 여러 데이터 중 하나를 가리키기 위해 사용된다

  정리
  REST 규칙을 이용해서 만든 api 디자인 패턴
  Http 명령어와 URL을 매칭시켜 url디자인을 좀더 단순하고 통일성 있게 만듬
  HTTP명령어
  Get : 데이터를 가져올 때 쓰임 (fetch하면 기본 명령어 속성이 Get임)
  Post : 데이터를 생성할 때 쓰임.
  Put : 데이터를 수정할 때 쓰임(Patch 라고도 불림)
  Delete: 데이터를 삭제할때 쓰임

  Restful Route의 필요성

  우리가 쇼핑몰 아이템을 보여주는 페이지가 있다고 가정하자
  어떤사람은
  /showitem 이라고 만들고 /getitem 이라고 만들 수 있다
  어떤 아이템은 삭제하는 경우에는 /removeitems or / deleteitems 


  이렇게 하면 url은 길고 복잡해진다. 이를 해결하기 위해 나온게 restful 디자인이다

  url에서 동사는 빼고 이를 Http 명령어로 대체한다
  /items + get 명령어 = 아이템읽어오기
  /items + post 명령어 = 아이템 생성하기 
  /items + put 명령어 = 아이템 수정하기 
  /items + delete명령어 = 아이템 삭제하기
  이런 규칙으로 바뀐다

  내가 하나의 아이템만 가져오고싶다면 뒤에 아이템의 id를 붙이는것도 restful route의 규칙이다

  /items/:id +get 명령어 = id를 가진 아이템읽어오기 
  /items/:id +put 명령어 = id를 가진 아이템 수정하기 
  /items/:id +delete 명령어 = id를 가진 아이템 삭제하기
*/