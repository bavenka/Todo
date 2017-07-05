import {COMPLETE_ALL} from '../constants/ActionTypes'

const completeAllAction = () => {
    return {
        type: COMPLETE_ALL,
    }
};

//TODO передовать user_id текущего пользователя
export const completeAll = (user_id) => (dispatch) => {
    user_id = '595ab20b6dd8163038f2665f';
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