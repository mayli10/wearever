import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SideBar from './Component';
import * as actions from './actions';

export const mapStateToProps = state => state.sideBar;

//dispatch: func that takes an obj and runs that obj thru the reducers
//for each action in actions, return a function that just dispatches that action
export const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
