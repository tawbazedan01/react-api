import React from 'react';
import Navbar from './components/navbar/Navbar';
import BgImg from './components/bg-img/BgImg';
import About from './components/about/About';
import Categories from './components/categories/Categories.jsx';
import CategoryDetails from './components/categoryDetails/CategoryDetails.jsx';
import Products from './components/products/Products.jsx';
import LimitDetails from './components/limit/LimitDetails.jsx';
import AllProducts from './components/allProducts/AllProducts.jsx';
import Detailsp from './components/productDetails/DetailsP.jsx';
import Create from './components/create/Create.jsx';
import Quotes from './components/quotes/Quotes.jsx';
import Random from './components/randomQuotes/Random.jsx';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar />
      <BgImg />
      <About />
      <Routes> 
        <Route path="/" element={<> <Categories /> <Products /></>} />
        <Route path="/limitDetails/:id" element={<LimitDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<CategoryDetails />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/productDetails/:id" element={<Detailsp />} />
        <Route path="/create" element={<Create />} />
        <Route path="/quotes" element={<><Random /><Quotes /></>} />
      </Routes>
      <Footer />
    </>
  );
}
