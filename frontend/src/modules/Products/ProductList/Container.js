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
      p.tags.includes(state.sideBar.tag),
    );
  }
  return currentState;
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);
