import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login({SetAuthenticate}) {
  const navi = useNavigate();
  const loginUser = (e) =>{
    e.preventDefault();
    console.log('제출');
    SetAuthenticate(true);
    navi('/');
  }
  return (
    <div className='inner LoginInner'>
      <form onSubmit={(e)=>loginUser(e)} className='loginWrap'>
        <h2>로그인</h2>
        <div className='idWrap'>
          <label id="labelId" className="input-label" for="userId">아이디</label>  
          <input type="email" placeholder="이메일을 입력하세요" />
        </div>
        <div className='passWrap'>
          <label id="labelPassword" className="input-label" for="userPassword">비밀번호</label>  
          <input type="password" placeholder="비밀번호를 입력하세요" />
        </div>
        <button type='submit' className='submitLogin'>로그인</button>
      </form>
    </div>
  )
}

export default Login