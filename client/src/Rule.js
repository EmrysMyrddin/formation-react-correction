import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LikeButton from './LikeButton';

import './Rule.css';

class Rule extends Component {
  constructor(props) {
    super(props);
    this.state = { folded: !props.rule.description };
  }

  toggleFolded = () =>
    this.setState({ folded: !this.state.folded || !this.props.rule.description });

  render() {
    const { title, description, tags, likes, dislikes } = this.props.rule;
    const { folded } = this.state;

    const badges = tags.map(tag => (
      <span key={tag} className="badge">
        {tag}
      </span>
    ));

    return (
      <div className="panel panel-primary">
        <div className="panel-heading" role="presentation" onClick={this.toggleFolded}>
          {title}
          {description && (
            <i className={`pull-right glyphicon glyphicon-chevron-${folded ? 'up' : 'down'}`} />
          )}
        </div>
        <div className={`panel-body ${folded ? 'hidden' : ''}`}>
          <p>{description}</p>
        </div>
        <div className="panel-footer">
          <div className="btn-toolbar">
            {badges}
            <div className="btn-group btn-group-xs pull-right">
              <a className="btn btn-primary" title="Update">
                <i className="glyphicon glyphicon-pencil" />
              </a>
            </div>
            <div className="btn-group btn-group-xs pull-right">
              <LikeButton initialCounter={likes} type="like" />
              <LikeButton initialCounter={dislikes} type="dislike" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  static propTypes = {
    rule: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      likes: PropTypes.number.isRequired,
      dislikes: PropTypes.number.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  };
}

export default Rule;
