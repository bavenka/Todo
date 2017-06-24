import {connect} from 'react-redux';
import Cou from '../components/counter';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

const Counter = connect(
    mapStateToProps
)(Cou);

export default Counter