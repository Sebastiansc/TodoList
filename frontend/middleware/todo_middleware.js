import {
  REQUEST_TODOS,
  DELETE_TODO,
  CREATE_TODO,
  receiveTodos,
  receiveTodo } from '../actions/todo_actions';
import { fetchTodos, deleteTodo, postTodo } from '../util/todo_api_util';

const todoMiddleware = store => next => action => {
  const error = e => console.log(e);
  let success;
  switch (action.type) {
    case REQUEST_TODOS:
      success = response => store.dispatch(receiveTodos(response));
      fetchTodos( success, error);
      return next(action);
    case CREATE_TODO:
      debugger;
      success = response => store.dispatch(receiveTodo(response));
      postTodo(action.todo, success, error);
      return next(action);
    default:
      next(action);
  }
};

export default todoMiddleware;
