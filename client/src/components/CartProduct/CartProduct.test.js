import React from 'react';
import { shallow } from 'enzyme';
import CartProduct from './CartProduct';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('Component CartProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <CartProduct />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
