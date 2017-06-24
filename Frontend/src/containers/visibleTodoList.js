import {connect} from 'react-redux';
import TodoList from '../components/todoList';
import deleteTodo from '../actions/deleteTodo';
import completeTodo from '../actions/completeTodo';

const getTodos = (todos) => {
    return todos;
};

const mapStateToProps = (state) => {
    return {
        todos: getTodos(state.todos)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteClick: (id) => {
            dispatch(deleteTodo(id))
        },
        onCompleteClick: (id) => {
            dispatch(completeTodo(id))
        }

    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList