import { combineReducers } from 'redux';
import category_reducer from './category'
import firstTime from './firstTime'
import setHide from './setHide'
const rootReducer = combineReducers({
    category_reducer,
    firstTime,
    setHide
});

export default rootReducer;