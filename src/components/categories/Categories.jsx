import React from 'react';
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../loading/Loading';
import style from './categories.module.css';
import { Link } from 'react-router-dom';

export default function Categories() {
    const { data, error, isLoading } = useFetch(`https://dummyjson.com/products/category-list`);
    console.log(data);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            {error ? <div className='alert alert-danger'>{error}</div> : ''}

            <div className="categories container py-5">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 justify-content-evenly">
                    {data.map((category, index) => (
                        <div key={index} className={`col mb-4 d-flex flex-column align-items-center ${style.category}`}>
                            <h3 className="text-center">{category}</h3>
                            <span><Link to={`/categories/${category}`} className="text-decoration-none text-primary">Category Details</Link></span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
