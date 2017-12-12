import React from 'react';

const RuleDescriptionField = ({ defaultValue }) => (
  <div className="form-group">
    <label htmlFor="rule-desc">Description</label>
    <textarea
      className="form-control"
      id="rule-desc"
      placeholder="Description"
      defaultValue={defaultValue}
    />
  </div>
);

export default RuleDescriptionField;
