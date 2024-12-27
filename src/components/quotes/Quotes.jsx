import React from 'react'
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../loading/Loading';
import style from './quotes.module.css'; // تأكد من أنك أضفت ملف CSS لتنسيق الـ Quotes

export default function Quotes() {
  const { data, error, isLoading } = useFetch(`https://dummyjson.com/quotes`);
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {error ? <div className='alert alert-danger'>{error}</div> : ''}
      <div className='container p-5'>
        <div className={style.quotes}>
          <div className="row">
            {data.quotes.map(quote => (
              <div key={quote.id} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className={`${style.quote} p-4`}>
                  <p className="fs-5 mb-3">{quote.quote}</p>
                  <span className="d-block text-end text-muted">- {quote.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}
