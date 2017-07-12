import deleteTodoAction from '../../actions/deleteTodoAction'
import checkStatusCode from '../checkStatusCode'
import Auth from '../../utils/auth'
import {SERVER_URL} from "../../constants/ActionTypes";

const deleteTodo = (id) => (dispatch) => {

    return fetch(SERVER_URL + '/todo/' + id,
        {
            method: 'delete',
            headers: {
                'Authorization': Auth.getUserToken()
            },
        })
        .then(response => checkStatusCode(response))
        .then(response => dispatch(deleteTodoAction(id)))
        .catch((err) => {
            throw err;
        });
};

export default deleteTodo