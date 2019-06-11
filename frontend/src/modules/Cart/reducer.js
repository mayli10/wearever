import {
    SHOW_CART,
    ADD_ITEM,
    DELETE_ITEM,
    UPDATE_PRICE,
    DECREMENT_QTY
  } from './action-types.js';

const initialState ={
    isOpen: false,
    cartItems: [],
    totalPrice: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CART:
            return {
                ...state, 
                isOpen : !state.isOpen
            };
        case ADD_ITEM:
            const alreadyAdded = state.cartItems.find(
                product => product.pid === action.payload.pid
              );
            if (alreadyAdded) {
                return state;
            } else {
                return 
            }
        default:
            return state;
    }
}