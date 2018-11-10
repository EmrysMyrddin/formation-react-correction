export const actions = {
  RULES_LOADED: 'RULES/RULES_LOADED',
  LIKE: 'RULES/LIKE',
  DISLIKE: 'RULES/DISLIKE',
  ADDED: 'RULES/ADDED',
  UPDATED: 'RULES/UPDATED',
  SEARCH: 'RULES/SEARCH',
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
    
    export const searchRule = () => dispatch =>
      fetch(`/rest/rules`)
      .then(res => res.json())
      .then(rules =>
        dispatch({
          type: actions.SEARCH,
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

export const addRule = rule => dispatch =>
  fetch('/rest/rules/', {
    method: 'POST',
    body: JSON.stringify(rule),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(rule =>
      dispatch({
        type: actions.ADDED,
        payload: { rule },
      }),
    );

export const updateRule = rule => dispatch =>
  fetch(`/rest/rules/${rule.id}`, {
    method: 'PUT',
    body: JSON.stringify(rule),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(rule =>
      dispatch({
        type: actions.UPDATED,
        payload: { rule },
      }),
    );
    