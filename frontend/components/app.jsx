import React from 'react';
import TodoListContainer from './todo_list/todo_list_container';
import TodoListFormContainer from './todo_list/todo_form_container';

export default function App () {
  return(
    <div>
      <TodoListContainer />
      <TodoListFormContainer />
    </div>
  );
}
