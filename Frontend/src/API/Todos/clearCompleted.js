import {fake_user_id} from '../../constants/fakeUser'
import clearCompletedAction from '../../actions/clearCompletedAction'
import checkStatusCode from '../checkStatusCode'
import Auth from '../../utils/auth'

const clearCompleted = (userId) => (dispatch) => {
    //TODO передовать user_id текущего пользователя
    userId = fake_user_id;
    return fetch(`http://127.0.0.1:3000/api/todo/clearCompleted/` + userId,
        {
            method: 'delete',
            headers: {
                'Authorization': Auth.getUserToken()
            },
        })
        .then(response => checkStatusCode(response))
        .then(response => dispatch(clearCompletedAction()))
        .catch((err) => {
            throw err;
        });
};

export default clearCompleted