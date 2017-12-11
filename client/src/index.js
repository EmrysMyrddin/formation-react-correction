import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import RuleList from './RuleList';
import rules from './data';

const domElement = document.getElementById('root');
const reactElement = <RuleList rules={rules} />;

ReactDOM.render(reactElement, domElement);

registerServiceWorker();
