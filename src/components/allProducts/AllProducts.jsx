import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../loading/Loading';

export default function AllProducts() {
  const { data, error, isLoading } = useFetch(`https://dummyjson.com/products`);
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {error ? <div className='alert alert-danger'>{error}</div> : ''}
      <div className='products container py-5'>
        <div className="row gy-4">
          {data.products.map(product => (
            <div key={product.id} className="col-md-3 col-sm-6 col-12 text-center p-3">
              <div className="card shadow-sm">
                <img 
                  src={product.thumbnail} 
                  alt={product.title} 
                  className="card-img-top img-fluid mb-2" 
                  style={{ maxHeight: '200px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h6 className="card-title text-truncate">{product.title}</h6>
                  <span className='nav-link'>
                    <Link 
                      to={`/productDetails/${product.id}`} 
                      className="text-decoration-none text-secondary hover-link">
                      Details
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
