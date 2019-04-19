import React from 'react';
import ProductPage from '../modules/Products/ProductPage/Component';
import NavBar from '../modules/NavBar/Container';
import SideBar from '../modules/SideBar/Container';


export const Product = ({match}) => {
    const prodid = match.params.id
    return (
    <div>
        <NavBar/>
        <div className='main-container'>
            <SideBar/>
            <ProductPage product = {prodid}/>
        </div>
    </div>
    )
  
};

export default Product;
