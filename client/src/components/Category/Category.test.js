import React from 'react';
import { shallow } from 'enzyme';
import Category from './Category';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('Component Category', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Category />
      </Provider>
      );
    expect(component).toBeTruthy();
  });
});
