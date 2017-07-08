import {fake_user_id} from '../../constants/fakeUser';
import clearCompletedAction from '../../actions/clearCompletedAction';

const clearCompleted = (userId) => (dispatch) => {
    //TODO передовать user_id текущего пользователя
    userId = fake_user_id;
    return fetch(`http://127.0.0.1:3000/api/todo/clearCompleted/` + userId,
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