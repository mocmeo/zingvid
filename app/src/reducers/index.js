import { combineReducers } from 'redux';
import pageReducer from './reducer_page';

const rootReducer = combineReducers({
    page: pageReducer
});

export default rootReducer;