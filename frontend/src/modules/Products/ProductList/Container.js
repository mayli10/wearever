import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductList from './Component';
import * as actions from './actions';

export const mapStateToProps = state => {
  let currentState = {
    isLoading: state.productList.loadingTodo,
    products: state.productList.products,
  };

  if (state.sideBar.tag) {
    currentState.products = state.productList.products.filter(p =>
      p.tags.includes(state.sideBar.tag)
    );
  }

  // if (state.filterBar.orderByType) {
  //   currentState.products = state.productList.products.sort(p =>
  //     p.msrp
  //   );
  // }

  if (state.filterBar.targetSize) {
    const productsToChoose = [];
    for (let p of state.productList.products) {
      for (let v of p.variants) {
        if (v.options.size === state.filterBar.targetSize) productsToChoose.push(p);
      }
    }
    currentState.products = productsToChoose;
  }

  return currentState;
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);
