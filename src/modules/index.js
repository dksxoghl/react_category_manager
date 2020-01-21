import { combineReducers } from 'redux';
import category_reducer from './category'
import firstTime from './firstTime'
const rootReducer = combineReducers({
    category_reducer,
    firstTime
});

export default rootReducer;