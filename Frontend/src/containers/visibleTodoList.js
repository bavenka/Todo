import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import TodoList from '../components/todoList';
import deleteTodo from '../actions/deleteTodo';
import completeTodo from '../actions/completeTodo';
import editTodo from '../actions/editTodo';

const getTodos = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos;
        case 'completed':
            return todos.filter(t => t.completed);
        case 'active':
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = (state, {match}) => {
    return {
        todos: getTodos(state.todos, match.params.filter || 'all')
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