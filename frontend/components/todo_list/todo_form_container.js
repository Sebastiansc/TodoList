import { connect } from 'react-redux';
import TodoListForm from './todo_form';
import { createTodo } from '../../actions/todo_actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  postTodo: state => dispatch(createTodo(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListForm);
