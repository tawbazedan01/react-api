import React from 'react';
import style from './create.module.css';

export default function Create() {
  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <h2>Add Product</h2>
        <form>
          <div className={style.formGroup}>
            <label htmlFor="title">Product Title</label>
            <input type="text" id="title" placeholder="Enter product title" required />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea id="description" rows={4} placeholder="Enter product description" required defaultValue={""} />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="price">Price</label>
            <input type="number" id="price" placeholder="Enter product price" required />
          </div>
         
          <button type="submit" className={style.btn}>Add Product</button>
        </form>
      </div>
    </div>
  );
}
