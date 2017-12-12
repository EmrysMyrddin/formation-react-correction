/**
 * Unit tests for the RuleList component.
 */

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import rules from '../data.json';
import RuleList from '../RuleList';

describe('Rule List', () => {
  let ruleListElement;

  beforeEach(() => {
    ruleListElement = <RuleList rules={rules} />;
  });

  it('should display list of rules', () => {
    const renderer = new ShallowRenderer();

    renderer.render(ruleListElement);

    const result = renderer.getRenderOutput();
    expect(result).toBeDefined();

    expect(result.length).toBe(rules.length);

    result.forEach((child, idx) => {
      expect(child.props.rule).toBe(rules[idx]);
    });
  });
});
