import rules from './data.json';

export const actions = {
  RULES_LOADED: 'RULES/RULES_LOADED',
  LIKE: 'RULES/LIKE',
  DISLIKE: 'RULES/DISLIKE',
};

export const loadRules = () => ({
  type: actions.RULES_LOADED,
  payload: {
    rules,
  },
});

export const like = ruleID => ({
  type: actions.LIKE,
  payload: {
    ruleID,
  },
});

export const dislike = ruleID => ({
  type: actions.DISLIKE,
  payload: {
    ruleID,
  },
});
