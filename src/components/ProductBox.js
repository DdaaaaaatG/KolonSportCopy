// ProductBox.js

import React from 'react';
import { useNavigate } from 'react-router';

const ProductBox = ({ data }) => {
  const navigate = useNavigate();

  const showProduct = () => {
    if (data) {
      navigate(`/pages/ProducDetailtpage/${data.id}`, { state: { productData: data } }); //다음 페이지에 data 보냄
    }
  };

  return (
    <div className='ItemList' onClick={showProduct}>
      {/* data가 존재할 때만 렌더링 */}
      {data && (
        <>
          <div className="imgWrap">
            <img src={data.frontImg} alt="" />
          </div>
          <div className="ListText">
            <h4>{data.title}</h4>
            <h2>{data.price}</h2>
            <span>{data.tag}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductBox;
