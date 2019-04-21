import React from 'react';
import ProductPage from '../modules/Products/ProductPage/Component';
import NavBar from '../modules/NavBar/Container';
import SideBar from '../modules/SideBar/Container';
import ProductList from '../modules/Products/ProductList/Container';
import './ProductPage.css';


export const Product = ({match}) => {
    const prodid = match.params.id
    return (
    <div>
        <NavBar/>
        <div className='main-container'>
            <SideBar/>
            <div className='flexin'>
                <ProductPage product = {prodid}/>
                <div className='shrinkin'> 
                    <ProductList/>
                </div>
            </div>
        </div>
    </div>
    )
  
};

export default Product;
