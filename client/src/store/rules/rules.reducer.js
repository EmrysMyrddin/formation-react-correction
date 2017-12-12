import { actions } from './rules.actions';

const initialState = [];

const updateLikes = (rule, prop, increment) => ({
  ...rule,
  [prop]: rule[prop] + increment,
});

const rules = (state = initialState, action) => {
  switch (action.type) {
    case actions.RULES_LOADED:
      return action.payload.rules;
    case actions.LIKE: {
      const { ruleID } = action.payload;
      return state.map(rule => (rule.id !== ruleID ? rule : updateLikes(rule, 'likes', 1)));
    }
    case actions.DISLIKE: {
      const { ruleID } = action.payload;
      return state.map(rule => (rule.id !== ruleID ? rule : updateLikes(rule, 'dislikes', 1)));
    }
    default:
      return state;
  }
};

export default rules;
