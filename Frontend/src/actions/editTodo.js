import {EDIT_TODO} from '../constants/ActionTypes'

const editTodo = (id, text) => {
    return {
        type: EDIT_TODO,
        id,
        text
    }
};

export default editTodo