import React from 'react'
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../loading/Loading';

export default function Products() {
  const { data, error, isLoading } = useFetch(`https://dummyjson.com/products?limit=5`);
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {error ? <div className='alert alert-danger'>{error}</div> : ''}
      {
        <div className='products container'>
          {data.products.map(product => (
            <div key={product.id} className='product'>
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
            </div>
          ))}
        </div>
      }
    </>
  );
}
