import React from 'react';
import ReactDOM from 'react-dom';
import { fetchTodos, deleteTodo, postTodo } from './util/todo_api_util';
import configureStore from './store/store';
import { requestTodos, createTodo } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  ReactDOM.render(<Root store={store}/>, document.getElementById("root"));

  window.store = store;
  window.requestTodos = requestTodos;
  window.allTodos = allTodos;
  window.createTodo = createTodo;
});
