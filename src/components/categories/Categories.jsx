import React from 'react';
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../loading/Loading';
import style from './categories.module.css';


export default function Categories() {
    const { data, error, isLoading } = useFetch(`https://dummyjson.com/products/category-list`);
    console.log(data);

    if (isLoading) {
        return <Loading />
    }

    return (
        <>

            {error ? <div className='alert alert-danger'>{error}</div> : ''}

            <div className="categories container">
                <div className="row justify-content-evenly">
                    {data.map((category, index) => (
                        <div key={index} className={`col-3 ${style.category}`}>
                            <h3>{category}</h3>
                            <span></span>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}
