import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ),
    rootReducer
);

export default store;