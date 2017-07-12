import {SET_CURRENT_USER} from '../constants/ActionTypes'

const auth = (state = {}, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return Object.assign({}, {
                id: action.id,
                username: action.username,
                email: action.email
            });
        default:
            return state
    }
};

export default auth;