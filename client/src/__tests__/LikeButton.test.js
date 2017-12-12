/**
 * Unit tests for LikeBtn.js
 */

import React from 'react';
import TestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import Btn from '../LikeButton';

describe('LikeBtn', () => {
  let button;

  beforeEach(() => {
    button = React.createElement(Btn, {
      type: 'up',
      counter: 0,
    });
  });

  it('should increment counter', () => {
    const instance = TestUtils.renderIntoDocument(button);
    const component = TestUtils.findRenderedComponentWithType(instance, Btn);
    const domNode = ReactDOM.findDOMNode(component);

    expect(domNode).toBeDefined();
    expect(domNode.textContent).toContain('0');

    TestUtils.Simulate.click(domNode);

    expect(domNode).toBeDefined();
    expect(domNode.textContent).toContain('1');
  });
});
