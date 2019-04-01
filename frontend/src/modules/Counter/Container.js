import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Counter from './Component';
import * as actions from './actions';

export const mapStateToProps = state => ({
  count: state.counter.count,
  todoId: state.counter.todoId,
  loadingTodo: state.counter.loadingTodo,
  todoData: state.counter.todoData,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
