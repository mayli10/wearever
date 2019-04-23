import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavBar from './Component';
import * as actions from './actions';

export const mapStateToProps = state => state.navBar;

export const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
