import {CLEAR_COMPLETED} from '../constants/ActionTypes'
import {fake_user_id} from "../constants/fakeUser";

const clearCompletedAction = () => {
    return {
        type: CLEAR_COMPLETED,
    }
};

export const clearCompleted = (user_id) => (dispatch) => {
    //TODO передовать user_id текущего пользователя
    user_id = fake_user_id;
    return fetch(`http://127.0.0.1:3000/api/todo/clearCompleted/` + user_id,
        {
            method: 'delete',
        })
        .then(response => {
            if (response.status === 200)
                dispatch(clearCompletedAction());
        })
        .catch((err) => {
            throw err;
        });
};

export default clearCompleted