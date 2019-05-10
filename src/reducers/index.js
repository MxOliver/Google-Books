import { alert } from './alertReducer';
import { combineReducers } from 'redux';
import { search } from './searchReducer';

const rootReducer = combineReducers({
    alert,
    search
})

export default rootReducer;