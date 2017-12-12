export const actions = {
  RULES_LOADED: 'RULES/RULES_LOADED',
  LIKE: 'RULES/LIKE',
  DISLIKE: 'RULES/DISLIKE',
};

export const loadRules = () => dispatch =>
  fetch('/rest/rules')
    .then(res => res.json())
    .then(rules =>
      dispatch({
        type: actions.RULES_LOADED,
        payload: {
          rules,
        },
      }),
    );

export const like = ruleID => dispatch =>
  fetch(`/rest/rules/${ruleID}/likes`, { method: 'POST' }).then(
    dispatch({
      type: actions.LIKE,
      payload: {
        ruleID,
      },
    }),
  );

export const dislike = ruleID => dispatch =>
  fetch(`/rest/rules/${ruleID}/dislikes`, { method: 'POST' }).then(
    dispatch({
      type: actions.DISLIKE,
      payload: {
        ruleID,
      },
    }),
  );
