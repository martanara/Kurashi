import React from 'react';
import { shallow } from 'enzyme';
import ItemGallery from './ItemGallery';

describe('Component ItemGallery', () => {
  it('should render without crashing', () => {
    const component = shallow(<ItemGallery />);
    expect(component).toBeTruthy();
  });
});
