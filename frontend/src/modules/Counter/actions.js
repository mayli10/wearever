import * as actionTypes from './action-types';

export const increment = (num = 1) => ({
  type: actionTypes.increment,
  num
});

export const loadTodo = () => ({
  type: actionTypes.loadTodo
});

export const displayTodo = todoData => ({
  type: actionTypes.displayTodo,
  todoData
});

export const todoValueChange = todoId => ({
  type: actionTypes.todoValueChange,
  todoId
});

export const getTodo = () => (dispatch, getState) => {
  const todoId = getState().counter.todoId;
  dispatch(loadTodo());
  setTimeout(
    () =>
      fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(response => response.json())
        .then(todo => dispatch(displayTodo(todo))),
    1000
  );
};
