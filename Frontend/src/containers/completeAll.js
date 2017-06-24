import {connect} from 'react-redux';
import CompleteAllComponents from '../components/completeAll';
import completeAll from '../actions/completeAll';


const mapStateToProps = (state) => {
    return {
        todos: state.todos
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