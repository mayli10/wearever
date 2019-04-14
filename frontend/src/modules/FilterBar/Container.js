import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FilterBar from './Component';
import * as actions from './actions';

export const mapStateToProps = state => state.filterbar;

export const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);
