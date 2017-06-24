import {ADD_TODO, DELETE_TODO, COMPLETE_ALL} from '../constants/ActionTypes'

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        case DELETE_TODO:
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.id) {
                    return [
                        ...state.slice(0, i),
                        ...state.slice(i + 1)
                    ];
                }
            }
            return state;
        case 'COMPLETE_TODO':
            return state.map(t =>
                todo(t, action)
            );
        case COMPLETE_ALL:
            const areAllMarked = state.every(todo => todo.completed);
            return state.map(todo => (Object.assign({}, todo, {completed: !areAllMarked})));
        default:
            return state
    }
};

export default todos