import {ADD_TODO} from '../constants/ActionTypes'

let nextTodoId = 1;

const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }
};

export default addTodo