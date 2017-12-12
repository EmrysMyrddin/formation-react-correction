import { connect } from 'react-redux';

import RuleList from './RuleList';

const mapStateToProps = state => ({
  rules: state.rules,
});

export default connect(mapStateToProps)(RuleList);
