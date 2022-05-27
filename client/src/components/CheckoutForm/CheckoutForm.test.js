import React from 'react';
import { shallow } from 'enzyme';
import CheckoutForm from './CheckoutForm';

describe('Component CheckoutForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<CheckoutForm />);
    expect(component).toBeTruthy();
  });
});
