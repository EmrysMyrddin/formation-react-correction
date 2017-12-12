import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

import rules from './rules';

const rootReducer = combineReducers({
  rules,
  form,
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(rootReducer, compose(applyMiddleware(thunk), enhancer));
