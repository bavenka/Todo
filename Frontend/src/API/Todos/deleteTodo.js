import deleteTodoAction from '../../actions/deleteTodoAction'

const deleteTodo = (id) => (dispatch) => {

    return fetch(`http://127.0.0.1:3000/api/todo/` + id,
        {
            method: 'delete',
        })
        .then(response => {
            if (response.status === 200)
                dispatch(deleteTodoAction(id))
        })
        .catch((err) => {
            throw err;
        });
};

export default deleteTodo