import completeAllAction from '../../actions/completeAllAction'
import checkStatusCode from '../checkStatusCode'
import Auth from '../../utils/auth'
import {SERVER_URL} from "../../constants/ActionTypes";

//TODO передовать user_id текущего пользователя
export const completeAll = () => (dispatch) => {
    return fetch(SERVER_URL + '/todo/completeAll/',
        {
            method: 'put',
            headers: {
                'Authorization': Auth.getUserToken()
            },
        })
        .then(response => checkStatusCode(response))
        .then(response => dispatch(completeAllAction()))
        .catch((err) => {
            throw err;
        });
};

export default completeAll