import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: props.initialCounter };
  }

  updateCounter = () => this.setState({ counter: this.state.counter + 1 });

  render() {
    const { type } = this.props;
    const { counter } = this.state;

    return (
      <a
        className="btn btn-default"
        title={type === 'like' ? '+1' : '-1'}
        onClick={this.updateCounter}
      >
        {counter} <i className={`glyphicon glyphicon-thumbs-${type === 'like' ? 'up' : 'down'}`} />
      </a>
    );
  }

  static propTypes = {
    type: PropTypes.string,
    initialCounter: PropTypes.number,
  };

  static defaultProps = {
    type: 'like',
    initialCounter: 0,
  };
}

export default LikeButton;
