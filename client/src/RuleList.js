import React, { Component } from 'react';

import Rule from './Rule';

class RuleList extends Component {
  render() {
    return this.props.rules.map(rule => <Rule key={rule.id} rule={rule} />);
  }
}

export default RuleList;
