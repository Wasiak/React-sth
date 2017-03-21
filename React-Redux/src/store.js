import { createStore, applyMiddleware } from 'redux';
import createLogger  from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const middlewares = process.env.NODE_ENV === 'development'
	? [thunkMiddleware, createLogger()]
	: [thunkMiddleware];

export default createStore(reducer, applyMiddleware(...middlewares));
