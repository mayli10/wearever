import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MyWeareverBox from './Component';
import * as actions from './actions';

export const mapStateToProps = state => state.myWeareverBox;

export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyWeareverBox);
