import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from  './visibilityFilter'
import flashMessages from './flashMessages'

const mainReducer = combineReducers({
    todos,
    flashMessages,
    visibilityFilter
});

export default mainReducer