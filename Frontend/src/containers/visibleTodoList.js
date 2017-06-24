import { connect } from 'react-redux';
import TodoList from '../components/todoList';
import deleteTodo from '../actions/deleteTodo';

const getTodos = (todos) => {
      return todos;
}

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state.todos)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList