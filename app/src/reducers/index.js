import { combineReducers } from 'redux';
import linkReducer from './reducer_link';

export default combineReducers({
    link: linkReducer
});