import {connect} from 'react-redux';
import CompleteAllComponents from '../components/completeAll';
import completeAllAction from '../actions/completeAll';

const mapStateToProps = (state) => {
    return {
        check: state.todos.every(todo => todo.completed)
    }
};

const mapDispatchToProps = {
    onCompleteAllClick: completeAllAction
};

const CompleteAll = connect(
    mapStateToProps,
    mapDispatchToProps
)(CompleteAllComponents);

export default CompleteAll