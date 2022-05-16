import React from 'react';
import { shallow } from 'enzyme';
import Links from './Links';

describe('Component Links', () => {
  it('should render without crashing', () => {
    const component = shallow(<Links />);
    expect(component).toBeTruthy();
  });
});
