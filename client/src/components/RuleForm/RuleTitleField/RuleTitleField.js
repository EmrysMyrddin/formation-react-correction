import React from 'react';

const RuleTitleField = ({ defaultValue }) => (
  <div className="form-group">
    <label htmlFor="rule-title">Title</label>
    <input
      type="text"
      className="form-control"
      id="rule-title"
      placeholder="Title"
      defaultValue={defaultValue}
    />
  </div>
);

export default RuleTitleField;
