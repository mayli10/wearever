import React from 'react';
import { Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import EmailPopup from './EmailPopup';
import NavBar from '../modules/NavBar/Container';
import FilterBar from '../modules/FilterBar/Container';
import SideBar from '../modules/SideBar/Container';
import ProductList from '../modules/Products/ProductList/Container.js';
import './ProductListPage.css';

export const ProductListPage = () => (
  <div>
    <EmailPopup/>
    <NavBar/>
    <div className='main-container'>
      <SideBar/>
      <div>
        <div className='filter-container'>
          <FilterBar/>
        </div>
        <ProductList/>
      </div>
    </div>
  </div>
);

export default ProductListPage;
