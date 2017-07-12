import {SET_CURRENT_USER} from '../constants/ActionTypes'

const setCurrentUser = ({id, email, username}) => {
    return {
        type: SET_CURRENT_USER,
        id: id,
        email,
        username
    }
};

export default setCurrentUser;