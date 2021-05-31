import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './auth';

const rootReducer = combineReducers({
    auth: authReducer
});

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware( thunk ) ));
    return store;
}