import {connect} from 'react-redux';
import Header from '../components/header';
import {postTodo} from '../actions/postTodo';
import {fake_user_id} from "../constants/fakeUser";

const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: (text) => {
            if (text.length !== 0) {
                //TODO Брать id текущего пользователя из store
                dispatch(postTodo(fake_user_id, text, false));
            }
        }
    }
};

const HeaderContainer = connect(
    null,
    mapDispatchToProps
)(Header);

export default HeaderContainer