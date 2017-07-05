import {COMPLETE_TODO} from '../constants/ActionTypes'

const completeTodoAction = (id) => {
    return {
        type: COMPLETE_TODO,
        id
    }
};

export const changeTodoCompleted = (id) => (dispatch) => {
    return fetch(`http://127.0.0.1:3000/api/todo/changeCompleted/` + id,
        {
            method: 'put',
        })
        .then(response => {
            if (response.status === 202)
                dispatch(completeTodoAction(id))
        })
        .catch((err) => {
            throw err;
        });
};

export default changeTodoCompleted