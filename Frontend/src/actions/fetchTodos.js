//import  requestTodos from './requestTodos' //dispatch(requestTodos(userId))
import receiveTodos from './receiveTodos'


export const fetchTodosByUserId = (userId) => (dispatch) => {

    return fetch(`http://127.0.0.1:3000/api/todo/` + userId,
        {
            method: 'GET',
        })
        .then(response => response.json())
        .then(todos => {
            dispatch(receiveTodos(todos))
        })
        .catch((err) => {
            throw err;
        });
};