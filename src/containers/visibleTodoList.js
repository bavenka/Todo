import { connect } from 'react-redux';
import TodoList from '../components/todoList';

const getTodos = (todos) => {
      return todos;
}

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state.todos)
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
)(TodoList)

export default VisibleTodoList