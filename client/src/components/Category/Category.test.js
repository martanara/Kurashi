import React from 'react';
import { shallow } from 'enzyme';
import Category from './Category';

describe('Component Category', () => {
  it('should render without crashing', () => {
    const component = shallow(<Category />);
    expect(component).toBeTruthy();
  });
});
