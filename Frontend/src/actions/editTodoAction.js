import {EDIT_TODO} from '../constants/ActionTypes'

const editTodoAction = (id, text) => {
    return {
        type: EDIT_TODO,
        id,
        text
    }
};

export default editTodoAction