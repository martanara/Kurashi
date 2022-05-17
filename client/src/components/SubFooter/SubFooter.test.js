import React from 'react';
import { shallow } from 'enzyme';
import SubFooter from './SubFooter';

describe('Component SubFooter', () => {
  it('should render without crashing', () => {
    const component = shallow(<SubFooter />);
    expect(component).toBeTruthy();
  });
});
