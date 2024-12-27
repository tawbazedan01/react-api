import React from 'react';
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../loading/Loading';

export default function Categories() {
    const { data, error, isLoading } = useFetch(`https://dummyjson.com/products/category-list`);
    console.log(data);

    if (isLoading) {
        return <Loading />
    }

    return (
        <>

            {error ? <div className='alert alert-danger'>{error}</div> : ''}
            {
                <div className='category container'>
                    {data.map(category =>
                        <h2>{category}</h2>
                    )}
                </div>
            }
        </>
    );
}
