import {connect} from 'react-redux';
import CompleteAllComponents from '../components/completeAll';
import completeAll from '../API/Todos/completeAll';

const mapStateToProps = (state) => {
    return {
        check: state.todos.every(todo => todo.completed),
        display: Boolean(state.todos.length),
    }
};

const mapDispatchToProps = {
    onCompleteAllClick: completeAll
};

const CompleteAll = connect(
    mapStateToProps,
    mapDispatchToProps
)(CompleteAllComponents);

export default CompleteAll