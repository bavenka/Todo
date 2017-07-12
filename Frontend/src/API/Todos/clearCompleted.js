import clearCompletedAction from '../../actions/clearCompletedAction'
import checkStatusCode from '../checkStatusCode'
import Auth from '../../utils/auth'
import {SERVER_URL} from "../../constants/ActionTypes";

const clearCompleted = (dispatch) => {
    return fetch(SERVER_URL + '/todo/clearCompleted/',
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