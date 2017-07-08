import editTodoAction from '../../actions/editTodoAction'

const editTodo = (id, text) => (dispatch) => {

    return fetch(`http://127.0.0.1:3000/api/todo/`,
        {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'text': text,
                'id': id,
            })
        })
        .then(response => response.json())
        .then(todo => {
            dispatch(editTodoAction(todo._id, todo.text))
        })
        .catch((err) => {
            throw err;
        });
};


export default editTodo