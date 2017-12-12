import React from 'react';

const RuleDescriptionField = ({ input, meta: { error } }) => (
  <div className={`form-group ${error ? 'has-error' : ''}`}>
    <label htmlFor="rule-desc">Description</label>
    {error && <span className="help-block">{error}</span>}
    <textarea className="form-control" id="rule-desc" placeholder="Description" {...input} />
  </div>
);

export default RuleDescriptionField;
