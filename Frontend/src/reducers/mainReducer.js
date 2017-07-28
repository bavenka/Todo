import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import todos from './todos';
import visibilityFilter from  './visibilityFilter'
import flashMessages from './flashMessages'
import userDetails from './authentication'

const mainReducer = combineReducers({
    todos,
    flashMessages,
    visibilityFilter,
    userDetails,
    form: formReducer,
});

export default mainReducer