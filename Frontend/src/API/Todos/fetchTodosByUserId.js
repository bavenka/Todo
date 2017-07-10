import receiveTodos from '../../actions/receiveTodosAction'
import fetch from 'isomorphic-fetch'
import checkStatusCode from '../checkStatusCode'

export const fetchTodosByUserId = (userId) => (dispatch) => {

    return fetch(`http://127.0.0.1:3000/api/todo/` + userId,
        {
            method: 'GET',
        })
        .then(response => checkStatusCode(response))
        .then(response => response.json())
        .then(todos => dispatch(receiveTodos(todos)))
        .catch((response) => {
            throw response.error;
        });
};