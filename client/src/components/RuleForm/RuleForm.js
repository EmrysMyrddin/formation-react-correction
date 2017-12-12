import React from 'react';
import { Field } from 'redux-form';

import RuleTitleField from './RuleTitleField';
import RuleDescriptionField from './RuleDescriptionField';

const validateTitle = title => {
  if (!title) return 'The title is required';
  if (title.length > 50) return 'The title can only be up to 50 characters';
};

const validateDescription = desc => {
  if (!desc) return;
  if (desc.length < 5) return 'The description should contains at least 5 characters or be omitted';
  if (desc.length > 100) return 'The description can only be up to 100 characters';
};

const RuleForm = props => {
  const { defaultTitle, defaultDescription, handleSubmit, invalid, pristine, submitting } = props;
  const disabled = invalid || pristine || submitting;
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">New rule</h3>
      </div>
      <div className="panel-body">
        <form onSubmit={handleSubmit}>
          <Field name="title" component={RuleTitleField} validate={validateTitle} />
          <Field
            name="description"
            component={RuleDescriptionField}
            validate={validateDescription}
          />
          <button type="submit" className="btn btn-primary pull-right" disabled={disabled}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RuleForm;
