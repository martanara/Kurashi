import React from 'react';
import { shallow } from 'enzyme';
import ImageSlider from './ImageSlider';

describe('Component ImageSlider', () => {
  it('should render without crashing', () => {
    const component = shallow(<ImageSlider images={[]} />);
    expect(component).toBeTruthy();
  });
});
