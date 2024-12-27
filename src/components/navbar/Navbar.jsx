import React from 'react';
import { Link } from 'react-router-dom'; 
import Logo from '../../assets/images/logo1.jpg';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#"><img src={Logo} width={60} alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex gap-4 pe-3 ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">Category</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quotes">Quotes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
