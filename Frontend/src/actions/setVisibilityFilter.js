import {SET_VISIBILITY_FILTER} from '../constants/ActionTypes'

const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
};

export default setVisibilityFilter