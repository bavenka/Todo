import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from  './visibilityFilter'

const mainReducer = combineReducers({
    todos,
    visibilityFilter
});

export default mainReducer