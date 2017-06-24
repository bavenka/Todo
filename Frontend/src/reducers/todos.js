import {ADD_TODO, DELETE_TODO} from '../constants/ActionTypes'

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: true //TODO поменять на false
                }
            ];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state
    }
};

export default todos