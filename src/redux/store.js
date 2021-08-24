import { createStore, applyMiddleware } from "redux";

import logger from 'redux-logger';

import rootReducer from "./root-reducer";

// The Middleware that the Store is expecting from Redux is an array []

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

// the store object will be imported into index.js and passed into the PROVIDER