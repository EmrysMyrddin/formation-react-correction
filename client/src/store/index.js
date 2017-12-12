import { combineReducers, createStore } from 'redux';
import rules from './rules';

const rootReducer = combineReducers({
  rules,
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(rootReducer, enhancer);
