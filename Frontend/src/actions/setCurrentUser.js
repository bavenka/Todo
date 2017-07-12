import {SET_CURRENT_USER} from '../constants/ActionTypes'

const setCurrentUser = ({_id, email, username}) => {
    return {
        type: SET_CURRENT_USER,
        id: _id,
        email,
        username
    }
};

export default setCurrentUser;