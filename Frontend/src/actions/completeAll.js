import {COMPLETE_ALL} from '../constants/ActionTypes'
import {fake_user_id} from "../constants/fakeUser";

const completeAllAction = () => {
    return {
        type: COMPLETE_ALL,
    }
};

//TODO передовать user_id текущего пользователя
export const completeAll = (user_id) => (dispatch) => {
    user_id = fake_user_id;
    return fetch(`http://127.0.0.1:3000/api/todo/completeAll/` + user_id,
        {
            method: 'put',
        })
        .then(response => {
            if (response.status === 202)
                dispatch(completeAllAction())
        })
        .catch((err) => {
            throw err;
        });
};


export default completeAll