import React from 'react';
import TodoListItem from './todo_list_item';

export default class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestTodos();
  }

  render(){
    return (
      <div>
        <ul>
          {
            this.props.todos.map( (todo, idx) =>
            (
            <TodoListItem key={idx} todo={todo} />
            ))
          }
        </ul>
      </div>
    );
  }
}
