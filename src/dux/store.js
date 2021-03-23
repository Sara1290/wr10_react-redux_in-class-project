import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './userReducer';
import promiseMiddleware from 'redux-promise-middleware';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
    userReducer,
    productsReducer
})
//the argument here is the reducer function's name BUT NOW it's the rootReducer name holding both reducer names
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));