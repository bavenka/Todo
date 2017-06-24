import {DELETE_TODO} from '../constants/ActionTypes'

const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
};

export default deleteTodo