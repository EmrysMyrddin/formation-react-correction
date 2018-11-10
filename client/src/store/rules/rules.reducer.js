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

    case actions.ADDED:
      return [...state, action.payload.rule];


    case actions.UPDATED: {
      const ruleID = action.payload.rule.id;
      return state.map(rule => (rule.id === ruleID ? action.payload.rule : rule));
    }

    case actions.SEARCH: {
      return action.payload.rules;
    }

    default:
      return state;
  }
};

export default rules;
