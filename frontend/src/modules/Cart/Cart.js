import React, { Component } from 'react';
import connect from 'react-redux';
import uuid from 'uuid';
import { Scrollbars } from 'react-custom-scrollbars';
import CartItem from './CartItem';
import { showCart, addItem } from './actions.js';

class Cart extends Component {
    showCart = () => {
        const { showCart } = this.props;
        showCart();
      };

    render() {
        const { isOpen, cartItems } = this.props.cart;
        return (
            <div className= {`cart ${!isOpen ? 'transparent' : ''}`}>
                <div className={`cart-inside ${!isOpen ? 'active' : ''}`}>
                    <h2>Shopping Cart</h2>
                    <button type="button" className="close" onClick={this.showCart}>
                        Close
                    </button>
                    <Scrollbars style={{ height: '65%' }}>
                    <div className={'items'}>
                        {cartItems.length === 0 ? (
                            <h3> Nothing has been added yet. Add to your Wearever Box! </h3>
                        ) : (
                            <ul>
                            { cartItems.map(item => (
                                <li key={item.pid}>
                                    <CartItem item={item} />
                                </li>
                            )) }
                            </ul>
                        )}
                    </div>
                    </Scrollbars>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
  });
  
export default connect(
    mapStateToProps,
    { showCart, addItem }
  )(Cart);
  