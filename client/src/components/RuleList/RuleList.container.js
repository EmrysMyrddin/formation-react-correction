import { connect } from 'react-redux';

import { loadRules } from '../../store/rules';
import RuleList from './RuleList';

const mapStateToProps = state => ({
  rules: state.rules,
});

const mapDispatchToProps = {
  loadRules,
};

export default connect(mapStateToProps, mapDispatchToProps)(RuleList);
