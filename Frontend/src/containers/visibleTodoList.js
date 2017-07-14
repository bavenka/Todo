import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import TodoList from '../components/todoList';
import deleteTodo from '../API/Todos/deleteTodo';
import completeTodo from '../API/Todos/changeTodoCompleted';
import editTodo from '../API/Todos/editTodo';
import {ALL, ACTIVE, COMPLETED} from '../constants/filterTypes';

const getTodos = (todos, filter = 'all') => {
    switch (filter) {
        case ALL:
            return todos;
        case ACTIVE:
            return todos.filter(t => !t.completed);
        case COMPLETED:
            return todos.filter(t => t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = (state, {match}) => {
    return {
        todos: getTodos(state.todos, match.params.filter)
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

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList));

export default VisibleTodoList