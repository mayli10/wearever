import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductList from './Component';
import * as actions from './actions';

export const mapStateToProps = state => ({
  isLoading: state.productList.loadingTodo,
  products: state.productList.products,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
