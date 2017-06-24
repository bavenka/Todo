import {COMPLETE_TODO} from '../constants/ActionTypes'

const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        id
    }
};

export default completeTodo