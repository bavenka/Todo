import receiveTodos from '../../actions/receiveTodosAction'
import fetch from 'isomorphic-fetch'
import checkStatusCode from '../checkStatusCode'
import Auth from '../../utils/auth'

export const fetchTodosByUserId = () => (dispatch) => {

    return fetch(`http://127.0.0.1:3000/api/todo`,
        {
            method: 'GET',
            headers: {
                'Authorization': Auth.getUserToken()
            },
        })
        .then(response => checkStatusCode(response))
        .then(response => response.json())
        .then(todos => dispatch(receiveTodos(todos)))
        .catch((response) => {
            throw response.error;
        });
};