import deleteTodoAction from '../../actions/deleteTodoAction'
import checkStatusCode from '../checkStatusCode'
import Auth from '../../utils/auth'
const deleteTodo = (id) => (dispatch) => {

    return fetch(`http://127.0.0.1:3000/api/todo/` + id,
        {
            method: 'delete',
            headers: {
                'Authorization': Auth.getUserToken()
            },
        })
        .then(response => checkStatusCode(response))
        .then(response => dispatch(deleteTodoAction(id)))
        .catch((err) => {
            throw err;
        });
};

export default deleteTodo