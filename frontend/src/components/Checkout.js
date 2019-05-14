import React from 'react';
import ProductPage from '../modules/Products/ProductPage/Component';
import NavBar from '../modules/NavBar/Container';
import SideBar from '../modules/SideBar/Container';
import Checkout from '../modules/Checkout/Component';
import './Checkout.css';


export const checkout = ({match}) => {
    return (
    <div>
        <NavBar/>
        <div className='main-container'>
            <SideBar/>
            <div className = 'flexin'>
                <Checkout/>
            </div>
        </div>
    </div>
    )
  
};

export default checkout;