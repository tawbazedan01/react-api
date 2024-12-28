import React from 'react'
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../loading/Loading';
import { useParams } from 'react-router-dom';

export default function LimitDetails() {
    const { id } = useParams();
    const { data, error, isLoading } = useFetch(`https://dummyjson.com/products/${id}`);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="container py-5">
            {error ? <div className="alert alert-danger">{error}</div> : ''}

            <div className="card shadow-lg p-4">
                <div className="row g-4">
                    <div className="col-md-4">
                        <img
                            src={data.thumbnail}
                            className="img-fluid rounded"
                            alt={data.title}
                        />
                        <div className="card-body text-center mt-3">
                            <h5 className="card-title">{data.title}</h5>
                            <h6 className="text-muted">{data.category}</h6>
                            <div className="d-flex flex-column align-items-center mt-3">
                                <span className="badge bg-danger text-white fs-6">${data.price}</span>
                                <span className="text-muted mt-2">{data.brand}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text text-muted">{data.description}</p>
                            <h4 className="mt-4">Product Images:</h4>
                            <div className="d-flex flex-wrap gap-3 mt-3">
                                {data.images.map(img =>
                                    <img src={img} className='w-25' />
                                )}
                            </div>
                            <h6 className="mt-4">Tags:</h6>
                            <p className="text-muted">{data.tags.join(', ')}</p>
                        </div>
                    </div>
                </div>
            </div>
            {data.reviews.map(review => (
                <div key={review.id} className="card mb-3 shadow-sm m-5 p-2">
                    <div className="card-body">
                        <h5 className="card-title">{review.reviewerName}</h5>
                        <p className="card-text">{review.comment}</p>
                        <div className="d-flex justify-content-between">
                            <span className="badge bg-warning text-dark">{review.rating} ⭐</span>
                            <span className="text-muted">{new Date(review.date).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
