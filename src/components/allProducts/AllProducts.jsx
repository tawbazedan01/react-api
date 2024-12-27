import React from 'react'
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
       <div className='products container p-5'>
         <div className="row justify-content-evenly ">
           {data.products.map(product => (
             <div key={product.id} className={`col-2 ${style.product} text-center shadow`}>
               <img src={product.thumbnail} alt={product.title} width={200} />
               <h6>{product.title}</h6>
             </div>
           ))}
         </div>
       </div>
     </>
   );
}
