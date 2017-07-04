import {connect} from 'react-redux';
import Header from '../components/header';
import {postTodo} from '../actions/postTodo';

const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: (text) => {
            if (text.length !== 0) {
                //TODO Брать id текущего пользователя из store
                dispatch(postTodo('595ab20b6dd8163038f2665f', text, false));
            }
        }
    }
};

const HeaderContainer = connect(
    null,
    mapDispatchToProps
)(Header);

export default HeaderContainer