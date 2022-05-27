import React from 'react';
import { shallow } from 'enzyme';
import Checkout from './Checkout';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('Component Checkout', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Checkout />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
