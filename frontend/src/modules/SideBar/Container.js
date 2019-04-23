import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SideBar from './Component';
import * as actions from './actions';

export const mapStateToProps = state => state.sideBar;

export const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
