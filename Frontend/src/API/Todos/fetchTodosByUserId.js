import receiveTodos from '../../actions/receiveTodosAction'

export const fetchTodosByUserId = (userId) => (dispatch) => {

    return fetch(`http://127.0.0.1:3000/api/todo/` + userId,
        {
            method: 'GET',
        })
        .then(response => {
            if (response.status === 200) //TODO !!! надо ли обновлять элементы если статус 304? //|| response.status == 304
                return response.json();
            else
                throw response.error;
        })
        .then(todos => {
            dispatch(receiveTodos(todos))
        })
        .catch((err) => {
            throw err;
        });
};