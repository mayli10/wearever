import * as actionTypes from './action-types';
import axios from 'axios';

export const loadProducts = () => ({
  type: actionTypes.loadProducts
});

export const displayProducts = products => ({
  type: actionTypes.displayProducts,
  products
});

export const getProducts = () => (dispatch, getState) => {
  dispatch(loadProducts());
  axios.get('http://localhost:3001/product_data')
    .then (function (response) {
      console.log(response);
    })
    .then(response => response.json())
    .then(products => dispatch(displayProducts(products.products)))
    .catch(console.error);

  // fetch('http://localhost:3001/product_data')
  //   .then(response => response.json())
  //   .then(products => dispatch(displayProducts(products.products)))
};

// export const load_quiz = (whereto) => {
//   const url = `${quizAPIRoot}/${whereto}`;
//   return (dispatch) => {
//       dispatch({
//           type: LOAD_QUIZ
//       });
//       axios.get(url)
//         .then((response) => load_quiz_success(dispatch, response))
//         .catch((error) => load_quiz_failure(dispatch, error))
//   }
// }


// export const getProducts = () => (dispatch, getState) => {
//   dispatch(loadProducts());
//   fetch('http://localhost:3001/product_data')
//     .then(response => response.json())
//     .then(products => dispatch(displayProducts(products.products)))
//     .catch(console.error);
// };
