import {connect} from 'react-redux';
import Header from '../components/header';
import addTodo from '../actions/addTodo';

const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: (text) => {
            if (text.length !== 0) {
                dispatch(addTodo(text))
            }
        }
    }
};

const HeaderContainer = connect(
    null,
    mapDispatchToProps
)(Header);

export default HeaderContainer