import {ADD_TODO} from '../constants/ActionTypes'

const addTodoAction = (id, text) => {
    return {
        type: ADD_TODO,
        id,
        text
    }
};

export default addTodoAction