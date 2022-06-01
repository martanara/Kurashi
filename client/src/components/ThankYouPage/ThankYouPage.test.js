import React from 'react';
import { shallow } from 'enzyme';
import ThankYouPage from './ThankYouPage';

describe('Component ThankYouPage', () => {
  it('should render without crashing', () => {
    const component = shallow(<ThankYouPage />);
    expect(component).toBeTruthy();
  });
});
