import React from 'react'
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../loading/Loading';

export default function Quotes() {
  const { data, error, isLoading } = useFetch(`https://dummyjson.com/quotes`);
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {error ? <div className='alert alert-danger'>{error}</div> : ''}
      {
        <div className='quotes container'>
          {data.quotes.map(quote => (
            <div key={quote.id} className='quote'>
              <p>{quote.quote}</p>
              <span>{quote.author}</span>
            </div>
          ))}
        </div>
      }
    </>
  );
}
