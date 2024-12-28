import React from 'react';
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../loading/Loading';
import { useParams } from 'react-router-dom';

export default function CategoryDetails() {
    const { category } = useParams();
    const { data, error, isLoading } = useFetch(`https://dummyjson.com/products/category/${category}`);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="container py-5">
            {error ? <div className="alert alert-danger">{error}</div> : ''}

            <div className="row gy-4">
                {data.products.map((product) => (
                    <div key={product.id} className="col-md-3 col-sm-6 col-12">
                        <div className="card">
                            <img src={product.thumbnail} alt={product.title} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
