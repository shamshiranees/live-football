import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';
import apiMiddleware from './Middleware/api';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const releaseMiddleware = [apiMiddleware, thunk];
const devMiddleware = [...releaseMiddleware, logger];
const selectedMiddleware =  releaseMiddleware;

const store = createStore(rootReducer, applyMiddleware(...selectedMiddleware));

export default store;
