import * as actionTypes from './action-types';
import axios from 'axios';
import firebase from '../../../components/Firebase/firebase';

export const loadProducts = () => ({
  type: actionTypes.loadProducts
});

export const displayProducts = products => ({
  type: actionTypes.displayProducts,
  products
});

export const getProducts = () => (dispatch, getState) => {
  this.props.firebase.products().on('value', snapshot => {
    this.setState({
      products: snapshot.val(),
      loading: false,
    });
  });
};
