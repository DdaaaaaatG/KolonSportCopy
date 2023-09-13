import React,{useState} from 'react';
import { Link, useNavigate, useLocation  } from 'react-router-dom';
const Header = ({authenticate, SetAuthenticate}) => {
  const sideList = [
    {
      id:'',
      name:'KOLON MALL'
    },
    {
      id:'pages/Login',
      name:'로그인'
    },
    {
      id:3,
      name:'회원가입'
    },
    {
      id:4,
      name:'고객센터'
    },
    {
      id:5,
      name:<i className="fa-solid fa-basket-shopping"></i>
    },
  ]
  const gnbList= [
    {
      id:'',
      name:'소개',
      class: 'active'
    },
    {
      id:'Homepage',
      name:'홈',
      class:''
    },
    {
      id:'pages/ProductAllpage',
      name:'상품',
      class:''
    },
    {
      id:'',
      name:'기획전',
      class:''
    },
    {
      id:'',
      name:'컬렉션',
      class:''
    },
    {
      id:'',
      name:'매장안내',
      class:''
    },
    {
      id:'',
      name:'WEATHER MONSTER',
      class:''
    },
  ]
  
  //state값추가 
  const[activeLink, setactiveLink]= useState(0); //초기값 0
  //Link를 클릭 했을 때 활성화
  const navi = useNavigate()
  const LinkClick = (index)=>{
    setactiveLink(index); //클릭시 이벤트
  };
  const location = useLocation();
  const onCheckEnter = (e)=>{
    e.preventDefault();
   if(e.key==='Enter'){
    navi(`?q=${e.target.value}`);
   }
  }

  return (
    <div className='header'>
      <div className='HeaderTop inner'>
        <Link to="/" className='logo'>
        </Link>
        <form>
          <input type='search' onKeyPress={onCheckEnter} placeholder='신상품이 보고 싶다면? #신상품 태그' />
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>
        <div className="snb">
          <ul>
            {
              sideList.map((i,index)=>{
                return (
                  <Link key={index} to={`/${i.id}`}>
                    <li>{i.name}</li>
                  </Link>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className='gnb inner'>
          {
            gnbList.map((i, index)=>{
              return(
                <Link key={index} to={`/${i.id}`} onClick={()=>LinkClick(index)} className={activeLink === index ?'active' :''}>
                  {i.name}
                </Link>
              )
            })           
          }
      </div>
    </div>
  )
}

export default Header