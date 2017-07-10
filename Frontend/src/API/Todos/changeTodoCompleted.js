import completeTodo from '../../actions/completeTodoAction'
import checkStatusCode from '../checkStatusCode'

const changeTodoCompleted = (id) => (dispatch) => {
    return fetch(`http://127.0.0.1:3000/api/todo/changeCompleted/` + id,
        {
            method: 'put',
        })
        .then(response => checkStatusCode(response))
        .then(response => dispatch(completeTodo(id)))
        .catch((err) => {
            throw err;
        });
};

export default changeTodoCompleted