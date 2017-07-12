import {connect} from 'react-redux';
import Header from '../components/header';
import {postTodo} from '../API/Todos/postTodo';

const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: (text) => {
            if (text.length !== 0) {
                dispatch(postTodo(text, false));
            }
        }
    }
};

const HeaderContainer = connect(
    null,
    mapDispatchToProps
)(Header);

export default HeaderContainer