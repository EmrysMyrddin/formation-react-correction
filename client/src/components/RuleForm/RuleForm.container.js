import { connect } from 'react-redux';
import find from 'lodash/find';

import RuleForm from './RuleForm';

const mapStateToProps = (state, ownProps) => {
  const rule = find(state.rules, { id: ~~ownProps.match.params.id });

  return {
    defaultTitle: rule ? rule.title : '',
    defaultDescription: rule ? rule.description : '',
  };
};

export default connect(mapStateToProps)(RuleForm);
