import React from 'react'

export default function Create() {
  return (

    <div className='container'>
      <div className="form-container">
        <h2>Add Product</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Product Title</label>
            <input type="text" id="title" placeholder="Enter product title" required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" rows={4} placeholder="Enter product description" required defaultValue={""} />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" id="price" placeholder="Enter product price" required />
          </div>
          <div className="form-group">
            <label htmlFor="thumbnail">Thumbnail URL</label>
            <input type="url" id="thumbnail" placeholder="Enter thumbnail URL" required />
          </div>
          <button type="submit" className="btn">Add Product</button>
        </form>
      </div>

    </div>


  )
}
