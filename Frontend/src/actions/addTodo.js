import {ADD_TODO} from '../constants/ActionTypes'

const addTodo = (id, text) => {
    return {
        type: ADD_TODO,
        id,
        text
    }
};

export default addTodo