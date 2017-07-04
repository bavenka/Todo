//import  requestTodos from './requestTodos' //dispatch(requestTodos(userId))
import receiveTodos from './receiveTodos'


export const fetchTodos = (dispatch) => {

    return fetch(`http://127.0.0.1:3000/api/todo`,
        {
            method: 'GET',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
        })
        .then(response => response.json())
        .then(todos => {
            dispatch(receiveTodos(todos))
        })
        .catch((err) => {
            debugger;
            throw err;
        });
};