import addTodo from '../../actions/addTodoAction'

export const postTodo = (userId, text, completed) => (dispatch) => {

    return fetch(`http://127.0.0.1:3000/api/todo/`,
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'text': text,
                'completed': completed,
                'user_id': userId,
            })
        })
        .then(response => response.json())
        .then(todo => {
            dispatch(addTodo(todo._id, todo.text))
        })
        .catch((err) => {
            throw err;
        });
};