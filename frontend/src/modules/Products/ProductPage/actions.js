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

//incorrect, need to fix
export const getProducts = () => (dispatch, getState) => {
  firebase.database().ref("/Product")
  .orderByChild("sku")
  .equalTo(Number(this.props.product))
  .on('value', snapshot => {
    this.setState({
      list: snapshot.val(),
      isLoading: false,
    });
  });
};
