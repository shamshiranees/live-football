import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer';
import APIReducer from './APIReducer';
import store from '../store';

 const rootReducer =  combineReducers({
  home: HomeReducer,
  apiReducer: APIReducer,
});
export default  rootReducer
export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch