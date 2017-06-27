import {connect} from 'react-redux';
import ClearCompletedComponent from '../components/clearCompleted';
import ClearCompletedAction from '../actions/clearCompleted'

const mapStateToProps = (state) => {
    return {
        count: state.todos.reduce((count, todo) =>
            todo.completed ? count + 1 : count, 0)
    }
};

const mapDispatchToProps = {
    OnClearCompletedClick: ClearCompletedAction
};

const ClearCompleted = connect(
    mapStateToProps,
    mapDispatchToProps
)
(ClearCompletedComponent);

export default ClearCompleted