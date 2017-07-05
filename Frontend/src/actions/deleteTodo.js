import {DELETE_TODO} from '../constants/ActionTypes'

const deleteTodoAction = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
};


export const deleteTodo = (id) => (dispatch) => {

    return fetch(`http://127.0.0.1:3000/api/todo/` + id,
        {
            method: 'delete',
        })
        .then(res => {
            dispatch(deleteTodoAction(id))
        })
        .catch((err) => {
            throw err;
        });
};

export default deleteTodo