import React from 'react';
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../loading/Loading';
import style from './products.module.css'; 
import { Link } from 'react-router-dom';

export default function Products() {
  const { data, error, isLoading } = useFetch(`https://dummyjson.com/products?limit=5`);
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {error ? <div className='alert alert-danger'>{error}</div> : ''}
      <div className='products container p-5'>
        <div className="row justify-content-evenly ">
          {data.products.map(product => (
            <div key={product.id} className={`col-2 ${style.product} text-center shadow`}>
              <img src={product.thumbnail} alt={product.title} width={200} />
              <h6>{product.title}</h6>
              <span className='nav-link'><Link to={`/limitDetails/${product.id}`} className="text-decoration-none text-secondary hover-link">Details</Link></span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
