import * as actionTypes from './action-types';

export const loadProducts = () => ({
  type: actionTypes.loadProducts
});

export const displayProducts = products => ({
  type: actionTypes.displayProducts,
  products
});

export const getProducts = () => (dispatch, getState) => {
  dispatch(loadProducts());
  fetch('http://localhost:3001/data/products.json')
    .then(response => response.json())
    .then(products => dispatch(displayProducts(products.products)))
    .catch(console.error);
};
