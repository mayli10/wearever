import React from 'react';
import ProductPage from '../modules/Products/ProductPage/Component';

export const Product = ({match}) => {
    console.log(match);
    return (
    <div>
        <ProductPage/>
        <h3>ID: {match.params.id}</h3>
    </div>
    )
  
};

export default Product;
