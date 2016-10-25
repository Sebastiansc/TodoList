import React from 'react';

export default class TodoListForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {title: "", body: ""};
  }

  updateTitle(e) {
    this.setState({title: this.state.title.concat(e.currentTarget.value) });
  }

  updateBody(e) {
    this.setState({body: this.state.title.concat(e.currentTarget.value) });
  }

  render() {
    return (
      <div>
        <label value="title">Title</label>
        <input id="title" onChange={ e => this.updateTitle(e)}>
        </input>
        <label value="body">Body</label>
        <input id="body" onChange={ e => this.updateBody(e)}>
        </input>
        <button onClick={ () => this.props.postTodo(this.state)}>
          Create
        </button>
      </div>
    );
  }
}
