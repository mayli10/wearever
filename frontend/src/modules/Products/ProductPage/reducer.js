import * as actionTypes from './action-types';

export const initialState = {
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getProducts:
      return Object.assign({}, state, { isLoading: true });
    case actionTypes.displayProducts:
      return Object.assign({}, state, { isLoading: false, products: action.products });
    default:
      return Object.assign({}, state);
  }
};
