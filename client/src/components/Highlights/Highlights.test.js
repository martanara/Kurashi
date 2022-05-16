import React from 'react';
import { shallow } from 'enzyme';
import Highlights from './Highlights';

describe('Component Highlights', () => {
  it('should render without crashing', () => {
    const component = shallow(<Highlights />);
    expect(component).toBeTruthy();
  });
});
