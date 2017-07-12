import completeTodo from '../../actions/completeTodoAction'
import checkStatusCode from '../checkStatusCode'
import Auth from '../../utils/auth'
import {SERVER_URL} from "../../constants/ActionTypes";

const changeTodoCompleted = (id) => (dispatch) => {
    return fetch(SERVER_URL + '/todo/changeCompleted/' + id,
        {
            method: 'put',
            headers: {
                'Authorization': Auth.getUserToken()
            },
        })
        .then(response => checkStatusCode(response))
        .then(response => dispatch(completeTodo(id)))
        .catch((err) => {
            throw err;
        });
};

export default changeTodoCompleted