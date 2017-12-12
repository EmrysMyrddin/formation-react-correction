import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { RuleList } from './components';
import store from './store';

const domElement = document.getElementById('root');
const reactElement = (
  <Provider store={store}>
    <RuleList />
  </Provider>
);

ReactDOM.render(reactElement, domElement);

registerServiceWorker();
