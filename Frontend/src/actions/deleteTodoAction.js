import {DELETE_TODO} from '../constants/ActionTypes'

const deleteTodoAction = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
};

export default deleteTodoAction