import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import RuleList from '../RuleList';
import Header from '../Header';
import RuleForm from '../RuleForm';
import SearchRule from '../SearchRule';

class Layout extends Component {
  componentDidMount() {
    this.props.loadRules();
  }

  render() {
    if (!this.props.loaded) return 'Loading rules...';

    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="container">
          <Route exact path="/" component={SearchRule} />
            <Route exact path="/new" component={RuleForm} />
            <Route exact path="/edit/:id" component={RuleForm} />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
