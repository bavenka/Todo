import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL,
    CLEAR_COMPLETED
} from '../constants/ActionTypes'

const todos = (state = [], action) => {
    switch (action.type) {
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
        default:
            return state
    }
};

export default todos