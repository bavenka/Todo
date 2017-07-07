import {COMPLETE_TODO} from '../constants/ActionTypes'

const completeTodoAction = (id) => {
    return {
        type: COMPLETE_TODO,
        id
    }
};

export default completeTodoAction