import {SET_VISIBILITY_FILTER} from '../constants/ActionTypes';
import filterTypes from '../constants/filterTypes';

const visibilityFilter = (state = 'all', action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER: {
            if (filterTypes.includes(action.filter))
                return action.filter;
            else
                return state;
        }
        default:
            return state;
    }
};

export default visibilityFilter;
