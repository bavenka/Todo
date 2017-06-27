import {connect} from 'react-redux';
import TodoTextInput from '../components/todoTextInput';
import addTodo from '../actions/addTodo';

const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: (text) => {
            dispatch(addTodo(text))
        }
    }
};

const TodoTextInputContainer = connect(
    null,
    mapDispatchToProps
)(TodoTextInput);

export default TodoTextInputContainer