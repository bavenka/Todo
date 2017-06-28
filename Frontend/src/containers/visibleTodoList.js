import {connect} from 'react-redux';
import TodoList from '../components/todoList';
import deleteTodo from '../actions/deleteTodo';
import completeTodo from '../actions/completeTodo';
import editTodo from '../actions/editTodo';

const getTodos = (todos, filter) => {
    switch (filter) {
        case 'ALL':
            return todos;
        case 'COMPLETED':
            return todos.filter(t => t.completed);
        case 'ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteClick: (id) => {
            dispatch(deleteTodo(id))
        },
        onCompleteClick: (id) => {
            dispatch(completeTodo(id))
        },
        onEditClick: (id, text) => {
            dispatch(editTodo(id, text))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList