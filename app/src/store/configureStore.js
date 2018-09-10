import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

export function configureStore() {
    return createStore(reducers, {}, applyMiddleware(reduxThunk));
}

