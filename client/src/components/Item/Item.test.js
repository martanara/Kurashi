import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';

describe('Component Item', () => {
  it('should render without crashing', () => {
    const component = shallow(<Item />);
    expect(component).toBeTruthy();
  });
});
