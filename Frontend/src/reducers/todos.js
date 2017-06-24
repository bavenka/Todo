import {ADD_TODO, DELETE_TODO} from '../constants/ActionTypes'

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
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
        default:
            return state
    }
};

export default todos