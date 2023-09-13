// ProducDetailtpage.js

import React from 'react';
import { useParams, useLocation } from 'react-router';
import { styled } from 'styled-components';

const FrontImg = styled.img``;

const ProducDetailtpage = () => {
  
  const { id } = useParams();
  const location = useLocation();
  const productData = location.state?.productData; //코드는 이전 페이지에서 넘겨받은 상품 데이터를 가져옴

  if (!productData) {
    return (
      <div className='inner'>
        <p>상품 정보를 불러올 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className='inner DetailInner'>

      <div className='LeftBox'>
        <img src={productData.frontImg} alt="" className='frontImg'/>
        <img src={productData.backImg} alt="" className='backImg'/>
      </div>

      <div className='RightBox'>
        <h2>{productData.title}</h2>
        <h3>가격: {productData.price}</h3>
        <form>
          <select>
            {
              productData?.size.length >0 && productData.size.map((item) =>(
                <option>{item}</option>
              ))
            }
          </select>
        </form>
        디테일 페이지 {id}
      </div>

    </div>
  );
};

export default ProducDetailtpage;
