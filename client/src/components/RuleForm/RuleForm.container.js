import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import find from 'lodash/find';

import { addRule, updateRule } from '../../store/rules';
import RuleForm from './RuleForm';

const mapStateToProps = (state, ownProps) => {
  const rule = find(state.rules, { id: ~~ownProps.match.params.id });

  return {
    initialValues: {
      title: rule ? rule.title : '',
      description: rule ? rule.description : '',
    },
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const ruleID = ownProps.match.params.id;
  return {
    onSubmit: ruleID
      ? values => dispatch(updateRule({ ...values, id: ~~ruleID }))
      : values => dispatch(addRule(values)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'rule',
    onSubmitSuccess: (result, dispatch, props) => props.history.push('/'),
  }),
)(RuleForm);
