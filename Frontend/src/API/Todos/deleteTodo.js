import deleteTodoAction from '../../actions/deleteTodoAction'
import checkStatusCode from '../checkStatusCode'

const deleteTodo = (id) => (dispatch) => {

    return fetch(`http://127.0.0.1:3000/api/todo/` + id,
        {
            method: 'delete',
        })
        .then(response => checkStatusCode(response))
        .then(response => dispatch(deleteTodoAction(id)))
        .catch((err) => {
            throw err;
        });
};

export default deleteTodo