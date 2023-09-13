import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom'
import ProductBox from '../components/ProductBox';

const ProductAllpage = () => {
  const [productList, setProductList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q') || '';

    const getProduct = async () => {
      try {
        let url = `http://localhost:3004/products?q=${query}`;
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        let data = await response.json();
        setProductList(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }

    getProduct();
  }, [location.search]);

  return (
    <div className='inner ProductPageInner'>
      {productList.map((item, index) => (
        <ProductBox data={item} key={index} />
      ))}
    </div>
  )
}

export default ProductAllpage;
