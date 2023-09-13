import React from 'react'
import {Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const goToDeatial = () => {navigate('/pages/ProducDetailtpage/')}
  const goProdects = () => {navigate('/pages/ProductAllpage')}
  return (
    <div>
      <div className='inner'>
        <Link to='/ProductAllpage '>링크</Link>
        <br/>
        <button onClick={goToDeatial}>useNavigate 연습</button>
        <br/>
        <button onClick={goProdects}>상품상세</button>
      </div>
    </div>
  )
}

export default Homepage