import {REMOVE_CURRENT_USER} from '../constants/ActionTypes'

const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER,
    }
};

export default removeCurrentUser;