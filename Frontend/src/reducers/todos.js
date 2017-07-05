import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL,
    CLEAR_COMPLETED,
    EDIT_TODO,
    REQUEST_TODOS,
    RECEIVE_TODOS
} from '../constants/ActionTypes'

const todos = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_TODOS:
            return action.todos.map(todo => {
                todo.id = todo._id;
                delete todo._id;
                return todo;
            });
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case COMPLETE_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                    {...todo, completed: !todo.completed} : todo
            );
        case COMPLETE_ALL:
            const areAllMarked = state.every(todo => todo.completed);
            return state.map(todo => (Object.assign({}, todo, {completed: !areAllMarked})));
        case CLEAR_COMPLETED:
            return state.filter(todo => !todo.completed);
        case EDIT_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                    {...todo, text: action.text} : todo
            );
        default:
            return state
    }
};

export default todos