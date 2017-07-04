import {REQUEST_TODOS} from '../constants/ActionTypes'

const requestTodos = (userId) => {
    return {
        type: REQUEST_TODOS,
        userId
    }
};

export default requestTodos