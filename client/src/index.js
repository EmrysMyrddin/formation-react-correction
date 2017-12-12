import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { Layout } from './components';
import store from './store';

const domElement = document.getElementById('root');
const reactElement = (
  <BrowserRouter>
    <Provider store={store}>
      <Route path="/" component={Layout} />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(reactElement, domElement);

registerServiceWorker();
