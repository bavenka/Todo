import {RECEIVE_TODOS} from '../constants/ActionTypes'

const receiveTodosAction = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos
    }
};

export default receiveTodosAction