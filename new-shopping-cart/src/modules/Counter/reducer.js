import * as actionTypes from './action-types';

export const initialState = {
  count: 0,
  loadingTodo: false,
  todoId: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.increment:
      return Object.assign({}, state, { count: state.count + action.num });
    case actionTypes.loadTodo:
      return Object.assign({}, state, { loadingTodo: true, todoData: null });
    case actionTypes.displayTodo:
      return Object.assign({}, state, { loadingTodo: false, todoData: action.todoData });
    case actionTypes.todoValueChange:
      return Object.assign({}, state, { todoId: action.todoId })
    default:
      return Object.assign({}, state);
  }
};
