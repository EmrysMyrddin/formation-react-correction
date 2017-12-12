import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LikeButton extends Component {
  render() {
    const { type, onClick, counter } = this.props;

    return (
      <a className="btn btn-default" title={type === 'like' ? '+1' : '-1'} onClick={onClick}>
        {counter} <i className={`glyphicon glyphicon-thumbs-${type === 'like' ? 'up' : 'down'}`} />
      </a>
    );
  }

  static propTypes = {
    type: PropTypes.string,
    ruleID: PropTypes.number.isRequired,
  };

  static defaultProps = {
    type: 'like',
  };
}

export default LikeButton;
