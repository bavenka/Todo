import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from  './visibilityFilter'
import flashMessages from './flashMessages'
import userDetails from './authentication'

const mainReducer = combineReducers({
    todos,
    flashMessages,
    visibilityFilter,
    userDetails
});

export default mainReducer