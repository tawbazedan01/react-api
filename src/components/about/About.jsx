import React from 'react';

export default function About() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">About Us</h2>

      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="p-4 bg-light shadow-sm">
            <h5>Category</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="p-4 bg-light  shadow-sm">
            <h5>Products</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="p-4 bg-light  shadow-sm">
            <h5>Create</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="p-4 bg-light  shadow-sm">
            <h5>Quotes</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
