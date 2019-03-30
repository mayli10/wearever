import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Counter from './Component';
import * as actions from './actions';

export const mapStateToProps = state => ({
  count: state.counter.count
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
