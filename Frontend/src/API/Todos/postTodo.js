import addTodo from '../../actions/addTodoAction'
import checkStatusCode from '../checkStatusCode'
import Auth from '../../utils/auth'
import {SERVER_URL} from "../../constants/ActionTypes";

export const postTodo = (text, completed) => (dispatch) => {

    return fetch(SERVER_URL + '/todo',
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Auth.getUserToken()
            },
            body: JSON.stringify({
                'text': text,
                'completed': completed,
            })
        })
        .then(response => checkStatusCode(response))
        .then(response => response.json())
        .then(todo => {
            dispatch(addTodo(todo._id, todo.text))
        })
        .catch((err) => {
            throw err;
        });
};