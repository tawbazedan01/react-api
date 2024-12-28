import React from 'react';
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../loading/Loading';
import style from '../../components/randomQuotes/random.module.css'; 

export default function Random() {
  const { data, error, isLoading } = useFetch(`https://dummyjson.com/quotes/random`);
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {error ? <div className='alert alert-danger'>{error}</div> : ''}

      <div className='container p-5'>
        <div className={style.random}>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className={`${style.quote} p-4`}>
                <p className="fs-5 mb-3">{data.quote}</p>
                <span className="d-block text-end text-muted">- {data.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
