import {fake_user_id} from '../../constants/fakeUser';
import completeAllAction from '../../actions/completeAllAction';

//TODO передовать user_id текущего пользователя
export const completeAll = (userId) => (dispatch) => {
    userId = fake_user_id;
    return fetch(`http://127.0.0.1:3000/api/todo/completeAll/` + userId,
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