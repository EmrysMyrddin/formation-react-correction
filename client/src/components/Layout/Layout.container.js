import { connect } from 'react-redux';

import { loadRules } from '../../store/rules';
import Layout from './Layout';

const mapStateToProps = state => ({
  loaded: !!state.rules.length,
});

const mapDispatchToProps = {
  loadRules,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
