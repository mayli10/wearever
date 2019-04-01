import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import ProductList from '../modules/Products/ProductList/Component.js';

export const Home = () => (
  <div>
    <p>Home page</p>
    <ProductList/>
  </div>
);

export default Home;
