import React, { Component } from 'react';

import './Rule.css';

class Rule extends Component {
  render() {
    const { title, description = 'No description !', tags, likes, dislikes } = this.props.rule;

    const badges = tags.map(tag => (
      <span key={tag} className="badge">
        {tag}
      </span>
    ));

    return (
      <div className="panel panel-primary">
        <div className="panel-heading" role="presentation">
          {title}
          <i className="pull-right glyphicon glyphicon-chevron-down" />
        </div>
        <div className="panel-body">
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
              <a className="btn btn-default" title="+1">
                {likes} <i className="glyphicon glyphicon-thumbs-up" />
              </a>
              <a className="btn btn-default" title="-1">
                {dislikes} <i className="glyphicon glyphicon-thumbs-down" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rule;
