import React from 'react';

const RuleTitleField = ({ input, meta: { error } }) => (
  <div className={`form-group ${error ? 'has-error' : ''}`}>
    <label htmlFor="rule-title">Title</label>
    {error && <span className="help-block">{error}</span>}
    <input type="text" className="form-control" id="rule-title" placeholder="Title" {...input} />
  </div>
);

export default RuleTitleField;
