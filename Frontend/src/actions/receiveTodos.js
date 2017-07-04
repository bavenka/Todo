import {RECEIVE_TODOS} from '../constants/ActionTypes'

const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos
    }
};

export default receiveTodos