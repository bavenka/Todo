import {connect} from 'react-redux';
import CounterComponent from '../components/counter';

const mapStateToProps = (state) => {
    return {
        countUnfinishedTodos: state.todos.reduce((count, todo) =>
            !todo.completed ? count + 1 : count, 0)
    }
};

const Counter = connect(
    mapStateToProps
)(CounterComponent);

export default Counter