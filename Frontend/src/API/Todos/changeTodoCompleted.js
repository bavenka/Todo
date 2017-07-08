import completeTodo from '../../actions/completeTodoAction';

const changeTodoCompleted = (id) => (dispatch) => {
    return fetch(`http://127.0.0.1:3000/api/todo/changeCompleted/` + id,
        {
            method: 'put',
        })
        .then(response => {
            if (response.status === 202)
                dispatch(completeTodo(id))
        })
        .catch((err) => {
            throw err;
        });
};

export default changeTodoCompleted