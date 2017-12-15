import { connect } from 'react-redux';
import find from 'lodash/find';

import { like, dislike } from '../../store/rules';
import LikeButton from './LikeButton';

const mapStateToProps = (state, ownProps) => {
  const rule = find(state.rules, { id: ownProps.ruleID });

  return {
    counter: ownProps.type === 'like' ? rule.likes : rule.dislikes,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick:
    ownProps.type === 'like'
      ? () => dispatch(like(ownProps.ruleID))
      : () => dispatch(dislike(ownProps.ruleID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
