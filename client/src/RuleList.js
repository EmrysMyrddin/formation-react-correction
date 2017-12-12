import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Rule from './Rule';

class RuleList extends Component {
  render() {
    return this.props.rules.map(rule => <Rule key={rule.id} rule={rule} />);
  }

  static propTypes = {
    rules: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
}

export default RuleList;
