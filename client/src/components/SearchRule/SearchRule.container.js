import { connect } from 'react-redux';

import RuleList from './SearchRule';

const mapStateToProps = state => ({
  rules: state.rules,
});

export default connect(mapStateToProps)(RuleList);
