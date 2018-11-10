
import { connect } from 'react-redux';
import { search } from '../../store/rules';

import SearchRule from './SearchRule';

const mapStateToProps = state => ({
  rules: state.rules,
});

export default connect(mapStateToProps)(SearchRule);
